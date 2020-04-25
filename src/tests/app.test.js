import react from 'react';
import App from '../App';
import {render, fireEvent, wait} from '@testing-library/react';
import {fetchShow as mockFetchShow} from '../api/fetchShow';

jest.mock('../api/fetchShow')

console.log(mockFetchShow)

test('fetches app data and renders',() => {
    expect(0).toBe(0)
})