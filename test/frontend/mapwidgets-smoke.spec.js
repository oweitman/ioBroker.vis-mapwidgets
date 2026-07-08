// @ts-nocheck
'use strict';

const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { test, expect } = require('@playwright/test');

const fixtureUrl = pathToFileURL(path.join(__dirname, 'fixtures', 'mapwidgets-smoke.html')).href;

test.beforeEach(async ({ page }) => {
    await page.route('https://tile.openstreetmap.org/**', route => route.abort());
    await page.goto(fixtureUrl);
});

test('renders a real Leaflet map with zero-coordinate marker and DivIcon html', async ({ page }) => {
    await page.evaluate(() =>
        window.renderMapWidget({
            icons: {
                zero: {
                    html: '<span data-testid="zero-marker">0</span>',
                    className: 'marker-zero',
                    iconSize: [28, 28],
                    iconAnchor: [14, 14],
                },
            },
            marker: [
                {
                    lat: 0,
                    lng: 0,
                    options: {
                        icon: 'zero',
                    },
                    tooltip: 'Null Island',
                },
            ],
        }),
    );

    await expect(page.locator('#w00001 .leaflet-container')).toBeVisible();
    await expect(page.locator('#w00001 .leaflet-marker-icon.marker-zero')).toHaveCount(1);
    await expect(page.getByTestId('zero-marker')).toHaveText('0');

    const center = await page.evaluate(() => window.vis.binds.mapwidgets.data.w00001.map.getCenter());
    expect(center.lat).toBeCloseTo(0, 5);
    expect(center.lng).toBeCloseTo(0, 5);
});

test('keeps the last valid rendered map when a state update contains invalid JSON', async ({ page }) => {
    await page.evaluate(() =>
        window.renderMapWidget({
            icons: {
                zero: {
                    html: '<span data-testid="zero-marker">0</span>',
                    className: 'marker-zero',
                    iconSize: [28, 28],
                    iconAnchor: [14, 14],
                },
            },
            marker: [
                {
                    lat: 0,
                    lng: 0,
                    options: {
                        icon: 'zero',
                    },
                },
            ],
        }),
    );

    await expect(page.locator('#w00001 .leaflet-marker-icon.marker-zero')).toHaveCount(1);

    await page.evaluate(() => window.pushMapWidgetState('{ invalid json'));

    await expect(page.locator('#w00001 .leaflet-container')).toBeVisible();
    await expect(page.locator('#w00001 .leaflet-marker-icon.marker-zero')).toHaveCount(1);

    const parseErrorText = await page.evaluate(
        () => window.vis.binds.mapwidgets.data.w00001.configParseErrorText,
    );
    expect(parseErrorText).toContain('Invalid JSON configuration');
});
