import React from "react";
import {
  render,
  wait,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";
import { fetchShow } from "./api/fetchShow";
jest.mock("./api/fetchShow");

beforeEach(() => {
  fetchShow.mockClear();
});

describe("App Tests", () => {
  test("Fetch shows and data is rendered", async () => {
    const seasons = {
      data: {
        episodes: [
          { name: "Chapter One: The Vanishing of Will Byers", season: 1 },
          { name: "Chapter Four: Will the Wise", season: 2 },
        ],
      },
    };
    fetchShow.mockResolvedValue(seasons);
    render(<App />);
    expect(fetchShow.mock.calls.length).toBe(1);
    await expect(screen.findByAltText(/Stranger Things/i)).toBeTruthy();
    const selectOption = await screen.findByPlaceholderText("Select an option");
    fireEvent.change(selectOption, { target: { value: "Season 1" } });
  });
});
