
import React from 'react';
import {render, fireEvent, waitFor, waitForElementToBeRemoved, getByTestId, getByLabelText} from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { act } from 'react-dom/test-utils';
import {episodesFixture} from './components/Episodes.test';

//create fetchEpisode function for testing
jest.mock("./api/fetchShow")

test("App fetches and renders episode data", async ()=>{
//expect(true).toBe(true);

mockFetchShow.mockResolvedValueOnce({data: episodesFixture});

// const {getByText, queryAllByTestId} = render(<App />);


// await waitFor(()=>{
//   expect(queryAllByTestId("episode")).toHaveLength(8);
// });
})

