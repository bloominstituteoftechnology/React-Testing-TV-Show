import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { mockResponse } from './mockResponse'

jest.mock('./api/fetchShow');

test('App component renders properly', () => {
    render(<App />);
});

test('App fetches and displays dropdown seasons when a user clicks the select a season button', async () => {
    mockFetchShow.mockResolvedValueOnce(mockResponse);

    render(<App />);

    const button = screen.getByRole("button", { name: /select a season/i });


    
})