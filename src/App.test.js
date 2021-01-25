import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import mockData from ".//utils/mockData";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("Renders without errors", () => {
  mockFetchShow.mockResolvedValueOnce({ data: mockData });
  render(<App />);
});

test("displays proper state if there isnt any data", () => {
  mockFetchShow.mockResolvedValueOnce({ data: null });
  render(<App />);

  const isLoading = screen.queryByText(/Fetching data.../i);
  expect(isLoading).toBeInTheDocument();
});

