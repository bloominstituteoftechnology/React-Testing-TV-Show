import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

import App from "./App";
import { mockEpisodeData } from "./fixtures/showData";

jest.mock("./api/fetchShow");

test("episodes are set when season selected", async () => {
  mockFetchShow.mockResolvedValueOnce({ data: mockEpisodeData });

  const { queryAllByTestId, getByText } = render(<App />);

  expect(queryAllByTestId("episode")).toHaveLength(0);

  // const wrapper = queryAllByTestId("dropdown");
  // wrapper.find("option").at(0).instance.selected = true;

  await wait();
  const dropdown = getByText(/select a season/i);
  dropdown.value = "Season 1";

  expect(queryAllByTestId("episodes")).toHaveLength(2);
});
