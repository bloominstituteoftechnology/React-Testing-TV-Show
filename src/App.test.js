import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

//components
import App from './App';

// FetchShow function
import { fetchShow as mockFetchShow } from './api/fetchShow';
//blocks actual function
jest.mock('./api/fetchShow');

const data = {
	data: [
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
	]
};

test('renders app without error and feches data', async () => {
	mockFetchShow.mockResolvedValueOnce(data);
	const { getByText } = render(<App />);

	getByText(/fetching data.../i);

	await waitFor(() => {
		expect(mockFetchShow).toHaveBeenCalled();
	});
});
