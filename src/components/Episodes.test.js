import React from 'react';
import Episodes from './Episodes'
import {render} from '@testing-library/react';

test('re-renders correctly with selected season', () => {
    const {queryAllByText, rerender, getByText} = render(<Episodes episodes={[]}/>)
    const initialEpisodes = queryAllByText(/season/i);
    expect(initialEpisodes).toHaveLength(0);

    rerender(<Episodes error='' episodes={data}/>)
    const episodes = getByText(/name/i)
    expect(episodes).toBeTruthy();
})

const data = [{
    id: "1",
    image: { medium: "medium_image"},
    name: "name",
    season: 3,
    number: 2,
    summary: "<p>Summary</p>",
    runtime: 20
}]