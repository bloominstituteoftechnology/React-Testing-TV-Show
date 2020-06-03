
import React from 'react';
import {render, fireEvent, waitFor, waitForElementToBeRemoved, getByTestId, getByLabelText} from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

//create fetchEpisode function for testing
//jest.mock("")

test("App fetches and renders episode data", async ()=>{
//expect(true).toBe(true);

const {getByText, queryAllByTestId} = render(<App />);

//dropdown hasn't selected a season should return empty array
const episodeList = queryAllByTestId("episodes");

//const dropdown = getByText("dropdown");


console.log('ea: App.test.js,', episodeList);
});

