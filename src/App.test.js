import React from 'react';
import {render, waitFor} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

test('App fetches and renders data from api', () => {
    // Arrange & Act- render component and set up mock data, rerender w/ data
    const {queryAllByText, rerender} = render(<App />);

    // Act - rerender component w/ data
    // rerender(<App error="" episodes={data} />)
    
    //Check that there is 1 episode rendered: mini assertion
    expect(queryAllByText(/fetching data.../i)).toHaveLength(1);



    
})

//mock data

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