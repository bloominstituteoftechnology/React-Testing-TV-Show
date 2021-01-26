import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Episodes from "./components/Episodes";
test("renders without errors", () => {
  render(<App />);
});

test("user can select a season", async () => {
  render(<App />);
  const Dropdown = await screen.findByText(/Select a season/i);
  console.log(Dropdown);
  userEvent.click(Dropdown);
  //   userEvent.click(/season 1/i);
});
