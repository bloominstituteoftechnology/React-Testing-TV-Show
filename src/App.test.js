import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Episodes from "./components/Episodes";
test("renders without errors", () => {
  render(<App />);
});

test("user can select a season", async () => {
  const fakeData = jest.fn();

  render(<App />);
  const Dropdown = await screen.findByText(/Select a season/i);
  //   console.log(Dropdown);
  userEvent.click(Dropdown);
  const season1 = await screen.findByText(/season 1/i);
  expect(season1).toBeInTheDocument();
  userEvent.click(season1);
});
