import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { mockEpisodeData } from "./fixtures/showData";

test("renders component", () => {
  render(<App />);
});

test("episodes are set when season selected", () => {
  const { queryAllByTestId, getByText } = render(<App />);

  // const wrapper = queryAllByTestId("dropdown");
  // wrapper.find("option").at(0).instance.selected = true;

  const dropdown = getByText(/select a season/i);
  dropdown.value = "Season 1";
});
