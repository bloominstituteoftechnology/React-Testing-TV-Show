import React from "react";
import { screen, render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Page Renders w/o data", () => {
  render(<Episodes episodes={[]} />);
});

const episodes = [
  { name: "Episode 1", number: 1, runtime: 60, season: 1 },
  { name: "Episode 2", number: 2, runtime: 60, season: 1 }
];

test("renders new episodes when episode data is passed", () => {
  const { rerender } = render(<Episodes episodes={[]} />);

  let episodeObjects = screen.queryAllByTestId("episode");
  expect(episodeObjects).toHaveLength(0);


  rerender(<Episodes episodes={episodes} />);
  episodeObjects = screen.queryAllByTestId("episode");
  expect(episodeObjects).toHaveLength(2);
});