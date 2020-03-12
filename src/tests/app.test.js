import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchEpisodes } from "../api/fetchShow";

import Episodes from "../components/Episodes";
import App from "../App";
import { data } from "../mockData";
import { act } from "react-dom/test-utils";

jest.mock("../api/fetchShow");

test("App renders without crashing", () => {
  act(() => {
    mockFetchEpisodes.mockResolvedValueOnce(data);
  });
  render(<App />);
});

test("Season populate correctly when selected", async () => {
  mockFetchEpisodes.mockResolvedValueOnce(data);

  const { getByTestId, getByText } = render(<App />);
  await wait(() => {
    getByText(/Select a season/i);
  });
  const dropDown = getByText(/Select a season/i);
  userEvent.click(dropDown);
  //   fireEvent.change(dropDown, { value: "Season 1" });
  const text = getByText(/Season 1/i);
  expect(text).toBeInTheDocument();
  userEvent.click(text);
  getByText(/Season 1, Episode 1/i);
});
