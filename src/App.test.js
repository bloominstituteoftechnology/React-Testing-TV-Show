import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';
import {render,waitFor} from '@testing-library/react';


test('App renders an array of episodes and renders to the dom',async()=>{
    const {getByText,getAllByText}=render(<App/>)
    await waitFor(()=>{getByText(/select a season/i)});
    const button= getByText(/select a season/i);
    userEvent.click(button);
    const chooseSeason=getByText(/season 1/i);
    userEvent.click(chooseSeason);
    expect(getAllByText(/episode/i)).toHaveLength(8);

})

