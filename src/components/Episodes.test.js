import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
import { mockEpisodeData } from "../fixtures/showData";

test("renders component", () => {
  render(<Episodes episodes={[]} />);
});

test("component renders with data", () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId("episode")).toHaveLength(0);
  expect(queryAllByTestId("episode")).toStrictEqual([]);

  rerender(<Episodes episodes={mockEpisodeData} />);

  expect(queryAllByTestId("episode")).toHaveLength(2);
});
