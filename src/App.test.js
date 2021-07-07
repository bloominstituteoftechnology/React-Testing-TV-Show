import React from "react"
import { render, fireEvent, wait } from "@testing-library/react"

import {fetchShow as mockFetchShow} from "./api/fetchShow"
import App from "./App"
import { episodesFixture } from "./components/Episodes.test"

jest.mock("./api/fetchShow");
console.log("kh: App.test.js: mockFetchShow", mockFetchShow);

test("App renders", () =>{
    render(<App />)
})

test("App fetches show data and renders the data",async () =>{
    mockFetchShow.mockResolvedValueOnce(mockFetchShow)

    const { getByText } = render(<App />);

    await wait (()=>{
        getByText(/Select a season/i)
    })

    const dropdown = getByText(/Select a season/i);
    fireEvent.mouseDown(dropdown)
    const season = getByText(/Season 4/i);
    fireEvent.click(season);
     
})