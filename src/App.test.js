import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from './App';
import {fetchShow as mockFetchShow } from './api/fetchShow';
import { mockData } from './mockData';

jest.mock('./api/fetchShow');

test('renders seasons without errors', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    render(<App />);

    const header = await screen.findByRole("heading", {name: /stranger things/i});

    expect(header).toBeInTheDocument();

    userEvent.click(screen.getByText(/select a season/i));

    userEvent.click(screen.getByText(/season 1/i));

    expect(screen.getAllByText(/chapter/i)).toHaveLength(3);

});