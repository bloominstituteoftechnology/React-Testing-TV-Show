// import React from 'react';
import {formatSeasons} from './formatSeasons';

// formatSeasons returns an object and this tests for that
test('Testing that formatSeasons returns an object', () => {

    const expected = {'Season 1': [{season: 1}]}
    const seasons = formatSeasons(dummyData);

    expect(seasons).toEqual(expected)
});

// Dummy Data
const dummyData = [{season: 1}];