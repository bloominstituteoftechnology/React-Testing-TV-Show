import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchEpisodes } from "../api/fetchShow";

import Episodes from "../components/Episodes";
import App from "../App";
import { data } from "../mockData";
import { act } from "react-dom/test-utils";

jest.mock("../api/fetchShow");

test("App renders without crashing", () => {
  act(() => {
    mockFetchEpisodes.mockResolvedValueOnce(data);
  });
  render(<App />);
});
