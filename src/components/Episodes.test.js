import React from 'react';
import {render, screen} from "@testing-library/react";
import Episodes from './Episodes';

test("renders without error", () => {
    render(<Episodes />);
});