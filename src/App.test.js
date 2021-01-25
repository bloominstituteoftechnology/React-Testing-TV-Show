import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test("App renders without errors", () => {
    render(<App />);
});

test("Renders episode data when selecting a season", () => {
    // Arrange:
    render(<App />);

    // Act:
    const selectASeason = screen.getByText(/select a season/i);
    userEvent.click(selectASeason);
});