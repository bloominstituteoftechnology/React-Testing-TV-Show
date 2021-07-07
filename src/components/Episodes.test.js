import React from 'react'
import {screen, render, fireEvent, wait} from '@testing-library/react'
import Episodes from './Episodes'

const episodeMakeup = [{
    id: 'testid',
    image:{
        medium: 'test-image',
        original: 'test-image'
    },
    name: 'episode title',
    season: 'season number',
    number: 'episode number',
    summary: 'episode summary',
    runtime: 'runtime',
    embedded: {
        episodes: 'episodes'
    }
}];

describe('Episodes.js tests', () => {
    test('renders without errors', () => {
        render(<Episodes episodes = {[]} />)
    })


    test('rerenders episode object to screen', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes = {[]} />);

    expect(queryAllByTestId('episode')).toHaveLength(0);
    expect(queryAllByTestId('episode')).toStrictEqual([]);

    rerender(<Episodes episodes={episodeMakeup} />)
    console.log(episodeMakeup)
    expect(queryAllByTestId('episode')).toHaveLength(1);
})
})
