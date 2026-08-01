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

    const parseErrorText = await page.evaluate(() => window.vis.binds.mapwidgets.data.w00001.configParseErrorText);
    expect(parseErrorText).toContain('Invalid JSON configuration');
});

test('renders history as a linked map and location timeline', async ({ page }) => {
    await page.evaluate(() => window.renderTimelineWidget());

    await expect(page.locator('#wtimeline .leaflet-container')).toBeVisible();
    await expect(page.locator('#wtimeline')).toHaveClass(/is-timeline-narrow/);
    await expect(page.locator('#wtimeline .mapwidgets-timeline-person.is-active')).toHaveText(/Alice/);
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay')).toHaveCount(1);
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay strong')).toHaveText(
        'Unknown place',
    );
    await expect(page.locator('#wtimeline .mapwidgets-timeline-place small')).toHaveText(
        'Junghofstraße 5, Frankfurt am Main, Deutschland',
    );
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-move')).toHaveCount(1);
    await expect(page.locator('#wtimeline .mapwidgets-timeline-direction-icon')).toHaveCount(1);

    await page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay .mapwidgets-timeline-content').click();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay')).toHaveClass(/is-selected/);
    await expect(page.locator('#wtimeline .leaflet-tooltip .mapwidgets-timeline-tooltip strong')).toHaveText(
        'Unknown place',
    );
    await expect(page.locator('#wtimeline .leaflet-tooltip .mapwidgets-timeline-tooltip small')).toHaveText(
        'Junghofstraße 5, Frankfurt am Main, Deutschland',
    );
    const tooltipWidth = await page.locator('#wtimeline .leaflet-tooltip').evaluate(element => element.getBoundingClientRect().width);
    expect(tooltipWidth).toBeGreaterThanOrEqual(180);

    await page.locator('#wtimeline .leaflet-overlay-pane path[stroke-width="6"]').click({ force: true });
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-move')).toHaveClass(/is-selected/);
});

test('uses the selected layout, dark theme and an in-widget known-place dialog', async ({ page }) => {
    await page.evaluate(() => window.renderTimelineWidget('below', 'dark'));

    await expect(page.locator('#wtimeline')).toHaveClass(/mapwidgets-timeline-layout-below/);
    await expect(page.locator('#wtimeline')).toHaveClass(/mapwidgets-timeline-theme-dark/);
    await expect(page.locator('#wtimeline .mapwidgets-timeline-menu')).toHaveText('★');
    await expect(page.locator('#wtimeline .mapwidgets-timeline-menu')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#wtimeline .mapwidgets-timeline-menu')).toHaveCSS('color', 'rgb(249, 171, 0)');
    await page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay .mapwidgets-timeline-content').click();
    await expect(page.locator('#wtimeline .leaflet-tooltip .mapwidgets-timeline-tooltip small')).toHaveCSS(
        'color',
        'rgb(255, 255, 255)',
    );
    await page.locator('#wtimeline .mapwidgets-timeline-menu').click();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-dialog-backdrop')).toBeVisible();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-dialog [name="placeName"]')).toHaveValue(
        'Unknown place',
    );
    await expect(page.locator('#wtimeline [data-place-address="street"]')).toHaveText('Junghofstraße');
    await expect(page.locator('#wtimeline [data-place-address="housenumber"]')).toHaveText('5');
    await expect(page.locator('#wtimeline [data-place-address="city"]')).toHaveText('Frankfurt am Main');
    await expect(page.locator('#wtimeline [data-place-address="country"]')).toHaveText('Deutschland');
    await expect(page.locator('#wtimeline [data-action="delete-place"]')).toBeVisible();

    await page.locator('#wtimeline [name="placeName"]').fill('Office');
    await page.locator('#wtimeline [data-action="commit-place"]').click();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-dialog-backdrop')).toBeHidden();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay strong')).toHaveText('Office');
    await expect
        .poll(() =>
            page.evaluate(() =>
                window.vis.binds.mapwidgets.timeline.data.wtimeline.places.find(place => place.id === 'hilton')?.name,
            ),
        )
        .toBe('Office');

    await page.locator('#wtimeline .mapwidgets-timeline-menu').click();
    await page.locator('#wtimeline [data-action="delete-place"]').click();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-dialog-backdrop')).toBeHidden();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-menu')).toHaveText('☆');
    await expect(page.locator('#wtimeline .mapwidgets-timeline-menu')).toHaveAttribute('aria-pressed', 'false');
    const storage = await page.evaluate(() => {
        const runtime = window.vis.binds.mapwidgets.timeline.data.wtimeline;
        return {
            deleted: runtime.places.find(place => place.id === 'hilton')?.deleted,
            cachedAddress: Object.values(runtime.cache.entries)[0]?.address?.street,
        };
    });
    expect(storage).toEqual({ deleted: true, cachedAddress: 'Junghofstraße' });

    await page.locator('#wtimeline .mapwidgets-timeline-menu').click();
    await expect(page.locator('#wtimeline [data-action="delete-place"]')).toBeHidden();
    await page.locator('#wtimeline [name="placeName"]').fill('Office restored');
    await page.locator('#wtimeline [data-action="commit-place"]').click();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-dialog-backdrop')).toBeHidden();
    await expect(page.locator('#wtimeline .mapwidgets-timeline-entry.is-stay strong')).toHaveText('Office restored');
    await expect(page.locator('#wtimeline .mapwidgets-timeline-menu')).toHaveText('★');
});

test('restores the user-selected date when the widget is initialized again', async ({ page }) => {
    await page.evaluate(() => window.renderTimelineWidget());
    await page.locator('#wtimeline [data-action="previous"]').click();
    const selectedDate = await page.locator('#wtimeline .mapwidgets-timeline-date').textContent();

    await page.evaluate(() => window.renderTimelineWidget());

    await expect(page.locator('#wtimeline .mapwidgets-timeline-date')).toHaveText(selectedDate);
    const storedDate = await page.evaluate(() => window.localStorage.getItem('mapwidgets.timeline.date.wtimeline'));
    expect(storedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});

test('loads the shared ioBroker translations before both widgets run', async ({ page }) => {
    const translations = await page.evaluate(() => ({
        unknownPlace: window.systemDictionary['Unknown place']?.de,
        layout: window.systemDictionary.group_timeline_layout?.fr,
    }));

    expect(translations).toEqual({
        unknownPlace: 'Unbekannter Ort',
        layout: 'Disposition',
    });
});
