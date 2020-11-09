import React from "react"
import { render, waitFor, screen, getByText } from "@testing-library/react"
import {fetchShow as mockFetchShow} from "./api/fetchShow"
import userEvent from '@testing-library/user-event';
import App from "./App"

jest.mock("./api/fetchShow");

const episodesData = {

    data: {
      name: 'Stranger Things',
      summary: 'Stranger things happen than normal',
      image: {
        original: 'testimages'
      },
      _embedded: {
        episodes: [
          {
            id: 1,
            season: 1,
            number: 1,
            summary: 'Stuff happened in episode 1',
            runtime: '46 minutes',
          },
          {
            id: 2,
            season: 1,
            number: 2,
            summary: 'Stuff happened in episode 2',
            runtime: '46 minutes',
          },
          {
            id: 3,
            season: 1,
            number: 3,
            summary: 'Stuff happened in episode 3',
            runtime: '46 minutes',
          },
          {
            id: 4,
            season: 1,
            number: 4,
            summary: 'Stuff happened in episode 4',
            runtime: '46 minutes',
          },
        ]
      }
    }
  }

// test("App renders", () =>{
//     render(<App />)
// })

test("App fetches show data and renders the data", async () =>{
    mockFetchShow.mockResolvedValueOnce(episodesData)
    render(<App />)

    await waitFor( () => {
        const dropdown = screen.getByText(/Select a season/i);
        userEvent.click(dropdown);
        const season = screen.getByText(/Season 4/i)
        
    })

    // await wait (()=>{
    //     getByText(/Select a season/i)
    // })

    // const dropdown = getByText(/Select a season/i);
    // userEvent.mouseDown(dropdown)
    // const season = getByText(/Season 4/i);
    // userEvent.click(season);
})