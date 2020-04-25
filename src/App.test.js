import React from "react";
import { 
  render, 
  cleanup,
  waitForElementToBeRemoved, 
  fireEvent, } from "@testing-library/react"; 
  
  import mockAxios from 'axios';
  import mockDropdown from 'react-dropdown';
  import App from './App'; 
  import { mockData } from './mockData';

afterEach(cleanup);



test('fetches and renders the data', async () => {
  mockAxios.get.mockResolvedValueOnce(mockData); 

  const { getByTestId, getAllByTestId } = render(<App/>);

  expect(getByTestId('fetching')).toBeInTheDocument();
  await waitForElementToBeRemoved(() => getByTestId('fetching'));

  const selectInput = getByTestId('select');
  fireEvent.change(selectInput, {target: { value: 'Season 100' } });

  expect(selectInput).toHaveTextContent('Season 100');
  expect(getAllByTestId('episode')).toHaveLength(2);
});

