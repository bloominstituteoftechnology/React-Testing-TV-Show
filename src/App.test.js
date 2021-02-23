import React from 'react';
import {screen, render} from '@testing-library/react';
import App from './App';


test('renders without errors', ()=>{
    render(<App />)
})