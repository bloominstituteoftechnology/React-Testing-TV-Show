import React from "react";
import App from "./App";
import Episodes from "./components/Episodes";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { fetchShow, fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";

jest.mock("./api/fetchShow");

test("app renders without errors", () => {
  render(<App />);
});

// describe("testing the app", () => {

//   test("fetches data and renders data", async () => {
//     render(<App />);
//     mockFetchShow.mockResolvedValueOnce([]);
//     const dropDown = screen.findByTestId(/dropdown/i);
//     userEvent.click(dropDown);
//     // fireEvent.click(dropDown);
//     // screen.getByText(/Season 1/i);
//   });
// });
