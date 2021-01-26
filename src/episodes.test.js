import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Episodes from "./components/Episodes";
import StrangerData from "./api/strangerTestData";

test("does episodes render", () => {
  render(<Episodes episodes={[]} />);
});
test("renders dummy data of episodes", () => {
  render(<StrangerData />);
  console.log(<StrangerData />);
  expect(<StrangerData />).toMatchObject({ name: "Stranger Things" });
});
