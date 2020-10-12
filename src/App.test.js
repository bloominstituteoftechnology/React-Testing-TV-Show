import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Tests', () => {
    test('renders without errors', () => {
        render(<App />)
    })
})
