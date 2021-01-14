import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import Episodes from './Episodes';

const data = [
	{
		image: 'image.com',
		name: 'chapter 1',
		id: 1,
		season: 1
	},
	{
		image: 'image.com',
		name: 'chapter 2',
		id: 2,
		season: 1
	},
	{
		image: 'image.com',
		name: 'chapter 3',
		id: 3,
		season: 1
	}
];

test('Episodes component renders correctly', () => {
	render(<Episodes episodes={data} />);
});

test('Renders props from app.js and updates as state changes', () => {
	//renders component and destructuring rerender
	const { rerender } = render(<Episodes episodes={[]} />);

	//query for img
	const imgBefore = screen.queryByRole('img');

	//assert img to be null
	expect(imgBefore).toBeNull();

	//rerender component with data
	rerender(<Episodes episodes={data} />);

	//query img again
	const imgAfter = screen.queryAllByRole('img');

	// assert img existence
	expect(imgAfter).not.toBeNull();
	expect(imgAfter).toBeTruthy();
});
