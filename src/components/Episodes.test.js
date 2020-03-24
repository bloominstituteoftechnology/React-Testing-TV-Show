import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';

test("Running without an error", () => {
    render(<Episodes episodes={[]}/>)
})