import React from "react";
import { render, fireEvent, waitFor} from "@testing-library/react";
import {fetchShow as mockFetchShow } from './api/fetchShow';

import App from './App';


jest.mock('./api/fetchShow');
console.log(mockFetchShow);

test('fetches and renders the data', async () => {
    const mockData = {
        data: {
          name: 'devin',
          image: { original: '/original' },
          summary: '<p>A love letter<p>',
          _embedded: {
            episodes: [
              {
                id: 101,
                name: 'chapter 11',
                runtime: 100,
                season: 100,
                number: 11,
                image: { medium: '' },
                summary: '<p>just watch it</p>',
              },
            ],
          },
        },
      };
      jest.mock('react-dropdown', () => ({ options, value, onChange }) => {
        return (
          <select
            data-testid='select'
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={Date.now()} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      });
      it('fetches and renders the data', async () => {
        mockFetchShow.mockResolvedValueOnce(mockData);
        const { getByTestId } = render(<App />);
        expect(getByTestId('fetching')).toBeInTheDocument();
        await waitForElementToBeRemoved(() => getByTestId('fetching'));
        const select = getByTestId('select');
        fireEvent.change(select, { target: {value: 99 }});
        await waitFor(() => {
          expect(getByTestId('episode')).toBeInTheDocument()
        })
      });




  });





// const mockData = {
//     data:{
//         name:"devin",
//         image:{original: '/original'},
//         summary:'<p>A Love letter<p>',
//         _embedded:{
//             episodes:[
//                 {
//                     id:101,
//                     name:"chapter11",
//                     runtime:100,
//                     season:100,
//                     number:11,
//                     image:{ medium:''},
//                     summary:'<p> just watch it</p>',

//                 },
//             ],
//         }

        
//     }
// }