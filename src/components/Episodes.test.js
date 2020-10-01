import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';
import { mockShow } from '../fixtures/show';

test('renders component', () => {
    render(<Episodes episodes={[]}/>);
});

test('component render with the data', () => {
    const { queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId('show')).toHaveLength(0);
    expect(queryAllByTestId('show')).toStrictEqual([]);

    rerender(<Episodes episodes={mockShow}/>);

    expect(queryAllByTestId('show')).toHaveLength(2);
})