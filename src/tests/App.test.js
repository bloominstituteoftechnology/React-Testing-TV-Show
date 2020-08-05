import React from 'react';
import { render, fireEvent, wait, getAllByTestId } from '@testing-library/react';
import App from '../App';
import { mockEpisodes } from '../fixtures/mockEpisodes';
import { fetchShow as mockFetchShow } from '../api/fetchShow';

jest.mock('../api/fetchShow');

test('renders component', () => {
    render(<App />)
});

test('displays seasons when dropdown is clicked', async() => {
    mockFetchShow.mockResolvedValueOnce({ data: mockEpisodes });
    const { getByText, queryAllByTestId } = render(<App />);
    expect(queryAllByTestId('episodes')).toHaveLength(0);

    const drop = getByText(/fetching data/i);
    fireEvent.click(drop);

    await wait();

    expect(queryAllByTestId('episodes')).toHaveLength(0);
})