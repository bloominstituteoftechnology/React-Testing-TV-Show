import React from "react";
import { render, screen } from "@testing-library/react";
import { mockData } from "../mockData";
import Episodes from "./Episodes";

jest.mock("../api/fetchShow");

describe("testing app can make api calls", () => {
  test("app renders without errors", async () => {
    render(<Episodes episodes={mockData.data._embedded.episodes} />);
  });
  test("fetches showdata and renders data", async () => {
    render(<Episodes episodes={mockData.data._embedded.episodes} />);
    expect(screen.queryAllByTestId("episodes")).toHaveLength(3);
  });
});
