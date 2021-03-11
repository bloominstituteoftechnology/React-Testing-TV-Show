import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

import mockFetchShow from "./api/fetchShow";
import { mockResponse } from "./mockResponse";

// mock the fetchShow function with a fake version, in order to avoid making our test suite dependent on an external API
jest.mock("./api/fetchShow");

test("App component renders properly", () => {
  
  mockFetchShow.mockResolvedValueOnce(mockResponse);
  render(<App />);

  const dropdown = screen.getByTestId("dropdown");


  userEvent.change(dropdown, 'Season 1')

  expect(screen.getByTestId('select')).toHaveValue('Season 1')

  userEvent.selectOptions(screen.getByTestId('select-multiple'), ['1', '3'])

  expect(screen.getByTestId('val1').selected).toBe(true)
  expect(screen.getByTestId('val2').selected).toBe(false)
  expect(screen)



});

// test("App component renders properly", () => {
//   // Arrange
//   const { getByText, queryByText, getByRole } = render(<App />);
//   const dropdown = getByText(/season/i);

//   // no Act needed

//   // Assert

//   // there isn't a loading state displayed
//   expect(queryByText)(/fetching data/i).toBe(null);
//   expect(dropdown).toBeInTheDocument();
//   expect(dropdown).toHaveTextContent("Season");
// });

// test("Component transitions to loading state when fetching data", () => {
//   // Arrange
//   const {  } = render(<App />);
//   const loadingMessage = screen.getByText(/fetching data/i);

//   expect(loadingMessage).toBeInTheDocument();
//   expect(loadingMessage).toBeTruthy();
// })

// test("App fetches and displays shows data when a user clicks the get data button", () => {
// mockFetchShow.mockResolvedValueOnce(mockResponse);

// render(<App />);
// const button = screen.getByRole("button", {name: /get data/i });

// fireEvent.click(button);

// await waitFor(() => expect(screen.findAllByTestId("show")).toHaveLength(8));

// });


// test('fetches and renders show data', async ()=> {
//   render(<App />);
//   mockFetchShow.mockResolvedValueOnce(mockResponse);

  


  
//   await waitFor(() => expect(screen.findAllByTestId("show")).toHaveLength(1));


  // await wait();

  // expect(screen.getAllByTestId("mission")).toHaveLength(2);
// });