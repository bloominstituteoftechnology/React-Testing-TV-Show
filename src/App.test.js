import React from 'react';
import { mockData } from './fixtures/show';

import { render, wait, fireEvent, act, screen, queryByTestId, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');
jest.mock("react-dropdown", () => ({ options, value, onChange }) => {
    function handleChange(event) {
      const option = options.find(
        (option) => option.value === event.currentTarget.value
      );
      onChange(option);
    }
    return (
      <select data-testid="dropdown" value={value} onChange={handleChange}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  });

test('loads show data', async () => {
    mockFetchShow.mockResolvedValueOnce({data: mockData});

    const { queryAllByTestId, queryAllByText, getByText } = render(<App/>);

    expect(queryAllByTestId('show')).toHaveLength(0);

    // expect(screen.queryAllByText(/select a season/i)).toBeInTheDocument();
    // fireEvent.click(screen.getByText(/select a season/i));
    // fireEvent.click(screen.getByText(/season 2/i))
    // expect(screen.getByText('Season 2, Episode 2')).toBeInTheDocument();

    const dropdown = queryAllByTestId('dropdown');

    dropdown.value = 'Season 1';

    expect(dropdown.value).toBe('Season 1')

    await waitFor(() => { expect(queryAllByText('Season 1')).toBeTruthy()})

    // const option = screen.queryAllByText(/season 2/i);


    // expect(option).toBeTruthy()
    // fireEvent.click(screen.getByText(/season 1/i))'.

    // expect(queryAllByTestId('show')).toHaveLength(2);

    // expect(queryByText(/season 3/i));
})