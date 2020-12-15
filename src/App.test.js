import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

test('renders without errors', () => {
    mockFetchShow.mockResolvedValueOnce({
        data: {
            image: {
                original:
                "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
            },
            name: "Stranger Things",
            summary: "<p>A really cool show</p>",
            _embedded: {
                episodes: [
                    {
                        id: 1,
                        name: "episode",
                        image: {
                            medium:
                            "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                        },
                        number: 1,
                        season: 1,
                        summary: "episode",
                        runtime: 60,
                    },
                ],
            },
        },
    });
    render(<App />)
});

test('fetch and render show data', async ()=> {
    mockFetchShow.mockResolvedValueOnce({
        data: {
            image: {
                original:
                "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
            },
            name: "Stranger Things",
            summary: "<p>A really cool show</p>",
            _embedded: {
                episodes: [
                    {
                        id: 1,
                        name: "episode",
                        image: {
                            medium:
                            "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                        },
                        number: 1,
                        season: 1,
                        summary: "episode",
                        runtime: 60,
                    },
                ],
            },
        },
    });
    render(<App />);

    await waitFor(() => {
        const name = screen.getByTestId('showName');
        expect(name).toBeInTheDocument();
        // expect(screen.getAllByTestId('show')).toHaveLength(2);
    });
})