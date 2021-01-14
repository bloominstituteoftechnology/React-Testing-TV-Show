import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

xtest("Episodes renders properly", () => {
  // const mockData = jest.fn();
  const { getByText, queryByText, rerender } = render(
    <Episodes error="" episodes={false} />
  );
//  getByText(//i)

});