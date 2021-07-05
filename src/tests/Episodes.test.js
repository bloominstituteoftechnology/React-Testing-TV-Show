import React from 'react';
import { render } from '@testing-library/react';

import Episodes from '../components/Episodes';
import { mockEpisodes } from '../fixtures/mockEpisodes';

test('renders component', () => {
    render(<Episodes episodes={[]} />);
});

test('renders with new episode data', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

    expect(queryAllByTestId('episodes')).toHaveLength(0);
    expect(queryAllByTestId('episodes')).toStrictEqual([]);

    rerender(<Episodes episodes={mockEpisodes} />);

    expect(queryAllByTestId('episodes')).toHaveLength(2);
})