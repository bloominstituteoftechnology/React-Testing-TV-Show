import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test("App renders without errors", () => {
    render(<App />);
});

test("Renders episode data when selecting a season", async () => {
    // Arrange:
    render(<App />);

    // Act:
    const fetchingDataText = screen.getByRole('heading', {
        name: /fetching data/i
    });
    // console.log(fetchingDataText);

    await waitFor(() => {
        const titleText = screen.getByRole('heading', {
            name: /stranger things/i
        });
        const strangerThingsImg = screen.getByRole('img');
        const summaryText = screen.getByText(  /a love letter to the '80s classics that captivated a generation, is set in 1983 indiana, where a young boy vanishes into thin air\. as friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top\-secret government experiments, terrifying supernatural forces and one very strange little girl\./i);
        const dropdownSeason = screen.getByText(/select a season/i);
        // userEvent.click(dropdownSeason);
    });
});