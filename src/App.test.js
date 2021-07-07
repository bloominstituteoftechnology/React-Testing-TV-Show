import React from 'react'
import {render, waitFor, wait} from '@testing-library/react'
import App from './App'
import {fetchShow as mockFetchShow} from './api/fetchShow'
import { mockEpisodes } from './fixtures/episodesData'
import userEvent from '@testing-library/user-event'

jest.mock('./api/fetchShow')

describe('tests app',  ()=>{
    
test('tests if app renders',async () => {
    mockFetchShow.mockResolvedValueOnce(mockEpisodes);    
    const {queryAllByTestId,getByText} = render(<App/>);    
    expect(queryAllByTestId('episode')).toHaveLength(0)
   

    await waitFor(()=>{
        const dropdown = getByText(/select a season/i); 
        userEvent.click(dropdown) 
        const seasonOne = getByText(/season 1/i)
        userEvent.click(seasonOne)
        expect(queryAllByTestId('episode')).toHaveLength(3)          
    });
    // await waitFor(() => {

     
    // })
});    
})
