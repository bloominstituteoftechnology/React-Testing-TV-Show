import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow'
import App from './App'

jest.mock('./api/fetchShow');

test('app fetches data and then shows the data', async () => {
    mockFetchShow.mockResolvedValueOnce(data);
    const {queryAllByText} = render(<App />);
    const fetch = queryAllByText(/fetching data.../i)
    expect(fetch).toHaveLength(1)
    await waitFor(() => {
        const display = queryAllByText(/summary/i)
        expect(display).toHaveLength(1)
    })
})

const data = {
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