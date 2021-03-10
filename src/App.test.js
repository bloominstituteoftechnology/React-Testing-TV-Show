import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");




test("App component renders properly", () => {
  // Arrange
  const { getByText, queryByText, getByRole } = render(<App />);
  const dropdown = getByText(/season/i);

  // no Act needed

  // Assert

  // there isn't a loading state displayed
  expect(queryByText)(/fetching data/i).toBe(null);
  expect(dropdown).toBeInTheDocument();
  expect(dropdown).toHaveTextContent("Season");
});

test("Component transitions to loading state when fetching data", () => {
  // Arrange
  const {  } = render(<App />);
  const loadingMessage = screen.getByText(/fetching data/i);

  expect(loadingMessage).toBeInTheDocument();
  expect(loadingMessage).toBeTruthy();

})

test("App fetches and displays shows data when a user clinicks the get data button", () => {
mockFetchShow.mockResolvedValueOnce(mockResponse);

render(<App />);
const button = screen.getByRole("button", {name: /get data/i });

fireEvent.click(button);

await waitFor(() => expect(screen.findAllByTestId("show")).toHaveLength(4));



});
