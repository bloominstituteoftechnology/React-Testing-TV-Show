import { render, waitFor } from "@testing-library/react";
import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';


test('App fetches show data from the api and renders it', async()=>{
// arrange
const {getByText,getAllByText}=render(<App/>);
await waitFor(()=>{getByText(/select a season/i)}) ;
const button=getByText(/select a season/i)
userEvent.click(button);
const option= getByText(/Season 4/i);
userEvent.click(option);

    expect(getAllByText(/episode/i)).toHaveLength(1)

});





