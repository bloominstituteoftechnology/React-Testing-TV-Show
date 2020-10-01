import React from 'react';
import { render} from '@testing-library/react';
import Episodes from './Episodes';
import {episodeData} from '../fixtures/episodeData'



test('renders component', () => {
    render(<Episodes episodes={[]}/>);
})

test('component renders with episodes', () => {

    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]} />);

   const episodes = queryAllByTestId('episode');
   expect(episodes).toHaveLength(0);

    rerender(<Episodes episodes={episodeData._embedded.episodes} />);
    const show = queryAllByTestId('episode')

    expect(show).toHaveLength(6);
})

