import React from 'react';
import  { fetchShow as mockFetchShow } from './api/fetchShow';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./api/fetchShow');

// const fetchShowData = {
//     data: [
//         {

//         }
//     ]
// }