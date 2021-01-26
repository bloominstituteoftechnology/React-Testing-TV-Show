// import React from 'react';
// import { getByTestId, render, screen, waitFor } from '@testing-library/react';
// import App from './App';

// import {fetchShow as mockFetchShow} from './api/fetchShow';
// import userEvent from '@testing-library/user-event';
// jest.mock('./api/fetchShow');

// // test('App renders with no errors', () =>{
// //     render(<App />);
// // });

// test('dropdown works and shows seasons', async () =>{
//     render(<App/>)

//     const dropDwn = screen.queryByPlaceholderText(/select an option/i);
//     userEvent.click(dropDwn);
    
//     const seasonOne = await screen.findByText(/season 1/i);
//     expect(seasonOne).toBeInTheDocument();
// }