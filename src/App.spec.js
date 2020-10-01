import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

test("successfully renders data from api", async () => {
  const { getByText } = render(<App />);

  await waitFor(() => {
    getByText(/select a season/i);
  });

  const dropDown = getByText(/Select a season/i);

  userEvent.click(dropDown);

  const seasonOne = getByText(/Season 1/i);

  expect(seasonOne).toBeInTheDocument();

  userEvent.click(seasonOne);

  getByText(/season 1, episode 1/i);
});
