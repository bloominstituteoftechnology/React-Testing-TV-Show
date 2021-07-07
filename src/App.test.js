import React from 'react';
import {render, waitFor} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');

test('App fetches and renders data from api', async () => {
    // Arrange & Act- render component and set up mock data
    // Act - rerender component w/ data
    //Check that there is 1 episode rendered: mini assertion

    mockFetchShow.mockResolvedValueOnce(mockData);
    const {queryAllByText, rerender} = render(<App />);
    expect(queryAllByText(/fetching data.../i)).toHaveLength(1);
    await waitFor(() => {
        expect(queryAllByText(/summary/i)).toHaveLength(1);
    });    
});

//mock data

const mockData = {
    image: { original: "original"},
    name: "name",
    summary: "<p>summary</p>",
    _embedded: {
        episodes: [{
            id: "1",
            image: { medium: "medium_image"},
            name: "name",
            season: 3,
            number: 2,
            summary: "<p>Summary</p>",
            runtime: 20
        }]
    }
};