import React from 'react';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from './App';
import { mockData } from './utils/mockData';
import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');



describe("App tests", () => {
    test('render without errors', () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        render(<App />);
    });
    test('renders witht he dropdown menu', async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        render(<App />);

        const dropdown = await screen.findByText(/select a season/i);
        expect(dropdown).toBeTruthy();
    });
});