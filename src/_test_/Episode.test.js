import React from 'react';
import { render } from '@testing-library/react';
import Episodes from '../components/Episodes';
import { mockSeasons } from './App.test';

test('Episodes renders episodes', () => {
	const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

	expect(queryAllByTestId('episode')).toHaveLength(0);

	rerender(<Episodes episodes={mockSeasons.episodes} />);

	expect(queryAllByTestId('episode')).toHaveLength(26);
});
