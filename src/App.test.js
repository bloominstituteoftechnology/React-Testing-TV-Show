import React from 'react'
import {render, getAllByTestId, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App'
import {fetchShow as mockFetchShow} from './api/fetchShow.js' 
import {mockShowData} from './mocks/mockShowData'

const mockData = mockShowData;

jest.mock('./api/fetchShow')

test("App component renders properly", () => {
    render(<App />);
  });

test('App fetches and displays fetched data when button clicked', async () => {
    
    mockFetchShow.mockResolvedValueOnce(mockData);
    const {rerender, getByText }  = render(<App />)

    await waitFor( async () => {
       screen.debug();
    })

})