import React from 'react';
import {render, wait} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('data fetched and rendered', async() => {
    const {getByText, getAllByText}= render(<App/>);

    await wait(() => {getByText(/select a season/i)});

    const dropdown = getByText(/select a season/i)
    userEvent.click(dropdown);

    const selection = getByText(/season 1/i);
    userEvent.click(selection);
        expect(getAllByText(/episode/i)).toHaveLength(8)
})


