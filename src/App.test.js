import React from 'react';
import {render, waitFor} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

test('App fetches and renders data from api', () => {
    // Arrange - render component and set up mock data
    const {queryAllByText, rerender} = render(<App />);
    // Act - rerender component w/ data

    // Assert - make sure shows are rendered
})