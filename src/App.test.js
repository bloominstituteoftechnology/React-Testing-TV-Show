import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

//mock the async function!
jest.mock('./api/fetchShow');

const episodesData = {
    data: {
        name: "Devs",
        summary: "A cool show set in San Francisco",
        image: {
            original: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        _embedded: {
            episodes: [
                {
                    season: 1,
                    number: 1
                },
                {
                    season: 1,
                    number: 2
                },
                {
                    season: 2,
                    number: 1
                },
                
            ]
        }
    }
};
//javascript feature called async/await
test("clicking on the button fetches data and renders it to the DOM", async () => {
    // mock the resolved data
    mockFetchShow.mockResolvedValueOnce(episodesData);
    //render the component
    const { getByText, queryAllByRole } = render(<App />);

    //await for the data to be fetched
    await waitFor(() => {});
    expect(mockFetchShow).toHaveBeenCalledTimes(1);

    // Click the dropdown
    userEvent.click(getByText(/select a season/i));

    // We should have 2 seasons in the dropdown list
    const options = queryAllByRole(/option/i);
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent("Season 1");
    expect(options[1]).toHaveTextContent("Season 2");
})

