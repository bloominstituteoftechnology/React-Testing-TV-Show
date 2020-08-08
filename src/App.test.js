import React from "react";
import { render, fireEvent, wait, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

import App from "./App";
import {
  mockEpisodeData,
  mockShowData,
  newMockShowData,
  newNewShowData,
} from "./fixtures/showData";

jest.mock("./api/fetchShow");

test("episodes are set when season selected", async () => {
  mockFetchShow.mockResolvedValueOnce({ data: newNewShowData });

  const { queryAllByTestId, getByText } = render(<App />);

  expect(queryAllByTestId("episode")).toHaveLength(0);

  // const wrapper = queryAllByTestId("dropdown");
  // wrapper.find("option").at(0).instance.selected = true;

  // await wait();

  await waitFor(() => {
    expect(mockFetchShow).toHaveBeenCalledTimes(1);
    expect(getByText(/a love letter/i));
  });
  // const dropdown = getByText(/select a season/i);
  // dropdown.value = "Season 1";

  // expect(queryAllByTestId("episode")).toHaveLength(8);
});
