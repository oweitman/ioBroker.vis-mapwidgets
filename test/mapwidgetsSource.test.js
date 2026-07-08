// @ts-nocheck
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('mapwidgets widget source', () => {
    const source = fs.readFileSync(path.join(__dirname, '../widgets/mapwidgets/js/mapwidgets.js'), 'utf8');

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
});
