import React from "react";
import { 
  render, 
  waitForElementToBeRemoved, 
  fireEvent, } from "@testing-library/react"; 
  
  import mockAxios from 'axios';
  import mockDropdown from 'react-dropdown';
  import App from './App'; 
  import { mockData } from './mockData';

//   jest.mock(
//     'react-dropdown',
//     () => ({ options, value, onChange }) => {
//         return (
//             <select
//             value={value}
//             onChange={(e) => onChange(e.target)}
//             data-testid="select"
//             >
//             {options.map((option, i) => (
//             <option key={i} value={option}>
//                 {option}
//             </option>
//             ))}
//             </select>
//         );
//     }
// );

test('fetches and renders the data', async () => {
  mockAxios.get.mockResolvedValueOnce(mockData); 

  const { getByTestId, getAllByTestId } = render(<App/>);

  expect(getByTestId('fetching')).toBeInTheDocument();
  await waitForElementToBeRemoved(() => getByTestId('fetching'));

  const selectInput = getByTestId('select');
  console.log(selectInput.innerHTML)
  fireEvent.change(selectInput, {target: { value: 'Season 100' } });

  expect(selectInput).toHaveTextContent('Season 100');
  expect(getAllByTestId('episode')).toHaveLength(2);
});

