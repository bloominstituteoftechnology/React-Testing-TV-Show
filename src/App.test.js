import React from 'react';
import {fireEvent, screen, render} from '@testing-library/react';
import App from './App'

import {fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow')

test('initial render', () => {
    render(<App/>)
})

test('fetches and renders episode data', async () =>{
    render(<App />);
    mockFetchShow.mockResolvedValueOnce({
        _embedded.episode: [
            {episode_name: 'Episode 1', episode_id:1},
            {episode_name: 'Episode 1', episode_id:1}
        ]
    })

    const dropdown = screen.getByRole('dropdown')

})