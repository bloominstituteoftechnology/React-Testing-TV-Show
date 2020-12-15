import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/react';
import Episodes from './Episodes';

let dummyData = [
    {
        airdate: 1,
        airstamp: 1,
        id: 1,
        image: {medium: "hello"},
        name: "Chapter 1",
        number: 1,
        season: 1,
        summary: "Summary",
    },
    {
        airdate: 1,
        airstamp: 1,
        id: 2,
        image: {medium: "hello"},
        name: "Chapter 2",
        number: 1,
        season: 1,
        summary: "Summary"
    },
    {
        airdate: 1,
        airstamp: 1,
        id: 3,
        image: {medium: "hello"},
        name: "Chapter 3",
        number: 1,
        season: 1,
        summary: "Summary"
    }
]

test('ensure component renders', () => {
    render(<Episodes episodes={dummyData}/>)
})