import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import App from './App';

import { fetchShow as mockFetchShows } from './api/fetchShow';

jest.mock('./api/fetchShow');
    describe("Testing our App", ()=>{
        test("renders without errors", ()=>{
            render(<App />);
});

test('fetches show', async () => {
    render(<App />);

    const newShows = {data: [
        {
            show_name: "Stranger Things",
            show_id: "2993",
        }
    ]

};
});

test('fetches seasons', async () => {
    render(<App />);

    const newSeasons = {data: [
        {
            season: "1",
        }
    ]
};


mockFetchSeasons.mockResolvedValueOnce(newSeasons);

const dropdown = screen.getByText(/Select a season/i);
fireEvent.click(dropdown);

await wait();
expect(screen.queryAllByTestId("season")).toHaveLength(2);

});

