import React from 'react'
import {render, wait} from '@testing-library/react'
import App from './App'
// import {mockEpisodes} from './fixtures/episodesData'
import {fetchShow as mockFetchShow} from './api/fetchShow'
import { mockEpisodes } from './fixtures/episodesData'

jest.mock('./api/fetchShow')

describe('tests app',()=>{
test('tests if app renders', async () => {
    
    mockFetchShow.mockResolvedValueOnce(mockEpisodes);
    // await wait();
    const {queryAllByTestId} = render(<App/>);
    await waitFor();
    // const button = getByTestId('dropdown');
    expect(queryAllByTestId('episodes')).toHaveLength(0)
    // const selector = getByText(/season 1/i)
});    
})
