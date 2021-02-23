import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from './App';
import {fetchShow as mockFetchShow } from './api/fetchShow';
import userEvent from '@testing-library/user-event';
import { mockData } from './mockData';

jest.mock('./api/fetchShow');



test('renders seasons without errors', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const dropdown = await waitFor(() => screen.findByText(/select a season/i));
    const dropdownSeason = await waitFor(() => screen.getByText(/season 1/i));

    userEvent.click(dropdown);
    userEvent.click(dropdownSeason);

    await waitFor(() => {screen.findByText(/season 1, episode 1/i)}).toBeInTheDocument();
});