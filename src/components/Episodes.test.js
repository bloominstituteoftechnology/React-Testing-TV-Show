import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import Episodes from './Episodes';

test("renders empty episodes array without errors", () => {
    //arrange, act, assert all at once
    const {queryByTestId} = 
        render(<Episodes episodes={[]} />);
    // Should be empty, because there are no episodes
    const element = queryByTestId(/episodes-id/i);
    expect(element.childNodes).toHaveLength(0);
});

test("renders some episodes correctly", () => {
    //arrange, act, assert all at once
    const {queryAllByTestId} = 
        render(<Episodes episodes={[
            {
                id: 1,
                season: 1,
                number: 1,
                name: "A new beginning",
                summary: "The first episode",
                runtime: 40
            },
            {
                id: 2,
                season: 1,
                number: 2,
                name: "The plot thickens",
                summary: "Things are getting interesting",
                runtime: 40
            }
        ]} />);
    const episodeNumberElements = queryAllByTestId(/episode-number-id/i);
    expect(episodeNumberElements).toHaveLength(2);
    expect(episodeNumberElements[0]).toHaveTextContent("Season 1, Episode 1");
    expect(episodeNumberElements[1]).toHaveTextContent("Season 1, Episode 2");

});


