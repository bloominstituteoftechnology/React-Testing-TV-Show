import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import fetchShows from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("render App", async () => {
  const { debug } = render(<App />);
  await waitFor(() => {});
  debug();
});
