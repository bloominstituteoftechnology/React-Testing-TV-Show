import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

import mockFetchShow from './api/fetchShow'

const mockResponse = {
    data: {
      image: {
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
      },
      name: "Stranger Things",
      summary:
        "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
      _embedded: {
        episodes: [
          {
            id: 553946,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            },
            name: "Chapter One: The Vanishing of Will Byers",
            season: 1,
            number: 1,
            summary:
              "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
            runtime: 60,
          },
          {
            id: 578663,
            image: {
              medium:
                "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            },
            name: "Chapter Two: The Weirdo on Maple Street",
            season: 1,
            number: 2,
            summary:
              "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
            runtime: 60,
          },
        ],
      },
    },
  };

jest.mock('./api/fetchShow.js')

test('App component is rendering properly', () => {
    mockFetchShow.mockResolvedValueOnce(mockResponse);
    render(<App />);

    const dropdown = screen.getByTestId("dropdown");
    userEvent.change(dropdown, 'Season 1')

})