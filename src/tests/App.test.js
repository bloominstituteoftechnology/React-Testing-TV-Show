import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from '../App';

test('renders component', () => {
    render(<App/>)
})