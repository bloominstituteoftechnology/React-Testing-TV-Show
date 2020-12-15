import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';

test('App fetches and renders data', async() => {

    const { getByText, getAllByText } = render (<App/>);

    await waitFor(() => { getByText(/select a season/i)});

    const button=getByText(/select a season/i);
    userEvent.click(button);

    const option=getByText(/season 2/i);
    userEvent.click(option);
    expect(getAllByText(/episode/i)).toHaveLength(9);
});