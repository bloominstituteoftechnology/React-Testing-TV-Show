import React from "react"
import Episodes from "./Episodes"
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Renders without errors', ()=> {
    render(<Episodes episodes={[]}/>);
});