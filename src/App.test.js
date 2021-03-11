import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fakeData as mockFakeData } from './api/FakeData';
jest.mock("./api/fakeData");

test("App renders without errors", () => {
  render(<App/>);
});

test("Renders episodes on load", async () => {
  mockFakeData.mockResolvedValueOnce({
    data: [
        {
          airdate: "2016-07-15",
          airstamp: "2016-07-15T12:00:00+00:00",
          airtime: "",
          id: 578663,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
          },
          name: "Chapter Two: The Weirdo on Maple Street",
          number: 2,
          runtime: 60,
          season: 1,
        },
        {
          airdate: "2016-07-15",
          airstamp: "2016-07-15T12:00:00+00:00",
          airtime: "",
          id: 578664,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
          },
          name: "Chapter Three: Holly, Jolly",
          number: 3,
          runtime: 60,
          season: 1,
        },
      ]
  });
  render(<App/>)
  await waitFor(()=>{
      expect(screen.getAllByTestId('shows')).toHaveLength(2)
  })
});
