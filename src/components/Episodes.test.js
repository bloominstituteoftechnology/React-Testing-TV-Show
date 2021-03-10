import React from 'react'
import {render, getAllByTestId, screen, fireEvent, waitFor} from '@testing-library/react';
import App from '../App'
import {fetchShow as mockFetchData} from '../api/fetchShow.js' 
import {mockData} from '../mocks/mockShowData'

jest.mock('../api/fetchShow')

test("App component renders properly", () => {
    render(<App />);
  });


// test("App component renders properly", () => {
//     render(<App />);
//   });

//test('App fetches and displays fetched data when button clicked')