import { fireEvent, render, screen, wait } from "@testing-library/react";
import React from "react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { mockData } from "./mockdata";
import userEvent from "@testing-library/user-event";
jest.mock("./api/fetchShow");
describe("testing app can make api calls", () => {
  test("app renders without errors", async () => {
    mockFetchShow.mockResolvedValueOnce({ data: mockData });
    render(<App />);
  });
  test("fetches showdata and renders data", async () => {
    mockFetchShow.mockResolvedValueOnce({ data: mockData });
    render(<App />);
    const dropdown = await screen.findByText(/Select a season/i);
    userEvent.click(dropdown);
    const seasonOne = await screen.findByText(/Season 1/i);
    userEvent.click(seasonOne);
  });
});

//fixing this later
