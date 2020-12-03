// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./components/Episodes";
import "@testing-library/jest-dom/extend-expect";

test("renders season images"),
  () => {
    const { getAllByTestId, rerender } = render(<Episodes images={[]} />);
    expect(getAllByTestId(/episodes/i)).toHaveLength(0);
  };
