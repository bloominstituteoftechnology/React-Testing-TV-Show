import React from "react";
import { screen, render, wait, waitFor } from "@testing-library/react";
import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
jest.mock("./api/fetchShow");

test("render App without errors", () => {
    mockFetchShow.mockResolvedValueOnce({
        data: {
          image: {
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
          },
          name: "Stranger Things",
          summary: "<p>BLAH BLAH BLAH</p>",
          _embedded: {
            episodes: [
              {
                id: 1,
                name: "Episode 1",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 1,
                season: 1,
                summary: "Lorem Ipsum",
                runtime: 60,
              },
              {
                id: 2,
                name: "Episode 2",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 2,
                season: 1,
                summary: "Yung Waff",
                runtime: 60,
              },
            ],
          },
        },
      });
  render(<App />);
});

test("fetches and renders episode information", async () => {
  mockFetchShow.mockResolvedValueOnce({
    data: {
      image: {
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
      },
      name: "Stranger Things",
      summary: "<p>BLAH BLAH BLAH</p>",
      _embedded: {
        episodes: [
          {
            id: 1,
            name: "Episode 1",
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
            },
            number: 1,
            season: 1,
            summary: "Yer Muther",
            runtime: 60,
          },
          {
            id: 2,
            name: "Episode 2",
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
            },
            number: 2,
            season: 1,
            summary: "WOW!",
            runtime: 60,
          },
        ],
      },
    },
  });

  render(<App />);

  await waitFor(() => {
    const showName = screen.queryByTestId("showName");
    expect(showName).toBeInTheDocument();
  });
});