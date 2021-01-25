import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Episodes from "./Episodes";
import mockData from "../utils/mockData";
import App from "../App";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
jest.mock("../api/fetchShow");

test("Renders without errors", () => {
  const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);

  rerender(<Episodes episodes={mockData._embedded.episodes} />);

  const episodes = getAllByTestId(/episode/i);
  expect(episodes).toHaveLength(28);
});

