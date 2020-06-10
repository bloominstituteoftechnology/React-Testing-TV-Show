
import React from 'react';
import {render, waitFor} from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { episodeFixture } from './components/Episodes.test';

//create fetchEpisode function for testing
jest.mock('./api/fetchShow')
//console.log("ea: App.test.js: mockFetchShow: ", mockFetchShow);
test("App fetches and renders episode data", async ()=>{
  // Arrange
  mockFetchShow.mockResolvedValueOnce({data: episodeFixture[0]});
  const { getByRole, getByTestId } = render(<App />);
  await waitFor(()=>{

  //  expect(getByRole("heading")).toHaveTextContent('Stranger Things');
    expect(getByTestId("showName")).toHaveTextContent('Stranger Things')
  });
})
  // Act
  // Assert