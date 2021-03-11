import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

const episodes = 

test("Episodes component renders properly", () => {
  render(<Episodes episodes={[]} />);
});

test("Episodes shows episodes when re-rendered with data from API", () => {
  render(<Episodes episodes={[]} />);
  const episodes = screen.queryByTestId("episode");

  // Assert that there are no episodes displayed in the initial state
  expect(episodes).toEqual(null);
  expect(episodes).toBeFalsy(); // redundant 



  // Re-render with data passed in the episodes prop

  // Assert that the episode names are displayed
});
