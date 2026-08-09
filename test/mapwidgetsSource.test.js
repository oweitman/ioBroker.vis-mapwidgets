// @ts-nocheck
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('mapwidgets widget source', () => {
    const source = fs.readFileSync(path.join(__dirname, '../widgets/mapwidgets/js/mapwidgets.js'), 'utf8');
    const timelineSource = fs.readFileSync(
        path.join(__dirname, '../widgets/mapwidgets/js/timelineWidget.js'),
        'utf8',
    );
    const formatErrorsSource = fs.readFileSync(
        path.join(__dirname, '../widgets/mapwidgets/js/formatAjvErrors.js'),
        'utf8',
    );

    it('renders schema dialog text without interpreting HTML', () => {
        assert.match(source, /\.text\(text\)/);
        assert.doesNotMatch(source, /\.html\(html\)/);
    });

    it('keeps lat/lng marker coordinates valid when one coordinate is zero', () => {
        assert.match(source, /Number\.isFinite\(item\.lat\) && Number\.isFinite\(item\.lng\)/);
        assert.doesNotMatch(source, /item\.lat && item\.lng/);
    });

    it('uses DivIcon when the html property exists and only passes bgPos when provided', () => {
        assert.match(source, /hasOwnProperty\.call\(cfg, 'html'\)/);
        assert.match(source, /if \(cfg\.bgPos\)/);
        assert.doesNotMatch(source, /bgPos: cfg\.bgPos/);
    });

    it('aborts Nominatim requests after a timeout and always clears the timer', () => {
        assert.match(timelineSource, /const timeoutMs = 10_000/);
        assert.match(timelineSource, /signal: controller\.signal/);
        assert.match(timelineSource, /if \(controller\.signal\.aborted\)/);
        assert.match(timelineSource, /finally \{\s*clearTimeout\(timeoutId\)/);
    });

    it('clamps timeline detection parameters to the editor ranges', () => {
        assert.match(timelineSource, /stayRadiusM: clampNumber\(data\.timeline_stayradius, 75, 10, 1000\)/);
        assert.match(timelineSource, /minStayMinutes: clampNumber\(data\.timeline_minstay, 10, 1, 1440\)/);
        assert.match(timelineSource, /maxSpeedKmh: clampNumber\(data\.timeline_maxspeed, 300, 0, 1000\)/);
        assert.match(timelineSource, /Number\.isFinite\(number\) \? Math\.min\(max, Math\.max\(min, number\)\) : fallback/);
    });

    it('contains every code translation in both complete translation files', () => {
        const en = require('../widgets/mapwidgets/myi18n/en.json');
        const translations = require('../widgets/mapwidgets/myi18n/translations.json');
        const codeKeys = new Set();
        const patterns = [/\b_\(\s*(['"])(.*?)\1/g, /\btranslate\(\s*(['"])(.*?)\1/g];
        for (const widgetSource of [source, timelineSource, formatErrorsSource]) {
            for (const pattern of patterns) {
                for (const match of widgetSource.matchAll(pattern)) {
                    codeKeys.add(match[2]);
                }
            }
        }

        assert.deepEqual(
            [...codeKeys].filter(key => !(key in en)),
            [],
        );
        assert.deepEqual(Object.keys(translations), Object.keys(en));

        const languages = ['en', 'de', 'ru', 'pt', 'nl', 'fr', 'it', 'es', 'pl', 'uk', 'zh-cn'];
        for (const [key, values] of Object.entries(translations)) {
            const placeholderCount = (values.en.match(/%s/g) || []).length;
            for (const language of languages) {
                assert.equal(typeof values[language], 'string', `${key}: missing ${language} translation`);
                assert.notEqual(values[language], '', `${key}: empty ${language} translation`);
                assert.equal(
                    (values[language].match(/%s/g) || []).length,
                    placeholderCount,
                    `${key}: placeholder mismatch in ${language}`,
                );
            }
        }
    });
});
