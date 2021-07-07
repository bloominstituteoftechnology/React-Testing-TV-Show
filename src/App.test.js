import React from "react";
import { render, fireEvent,wait, queryAllByTestId } from "@testing-library/react"
import App from "./App"
import { fetchShow as mockFetchShow } from "./api/fetchShow"
import { episodeFixture } from './components/Episodes.test';

// mocking the api sp we don't make a call and prep to be told what vaule to return
jest.mock('./api/fetchShow');
console.log(mockFetchShow);

test("App renders",async () =>{
    mockFetchShow.mockResolvedValue({data: episodeFixture})
    const{getByText, queryAllByTestId}= render(<App />)

    await wait (()=>{
        getByText(/Select a season/i)
    })

    const dropdown = getByText(/Select a season/i);
    fireEvent.mouseDown(dropdown)
    const season = getByText(/Season 4/i);
    fireEvent.click(season);

});
