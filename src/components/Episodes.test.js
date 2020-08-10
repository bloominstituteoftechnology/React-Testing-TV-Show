import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react';

// Testing the components as props change [w/ and w/o props]
test('Component renders w/ change of props', () =>{

// Arrange-render component and setup mock data
const {queryAllByText, rerender} = render(<Episodes episodes={[]} />)

// (mini assertion: check that no props have been passed)
expect(queryAllByText(/season/i)).toHaveLength(0);

// Act-rerender component w/ props & mockData
rerender(<Episodes episodes={[mockData]} />);

// Assert-make sure component renders mockData
expect(queryAllByText(/name/i)).toHaveLength(1);

});

// Mock Data
const mockData = {
    image: { img: "img" },
    name: "name",
    rating: {average: 5},
    _embedded: {
        episodes: [{
            id: "0",
            name: "name",
            season: 1,
            number: 1,
            summary: "<p>Episode Summary</p>",
        }]
    }
}