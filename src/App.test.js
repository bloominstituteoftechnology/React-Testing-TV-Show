import React from 'react';
import App from "./App" // Make sure to include the component your trying to test
import {fireEvent, render, screen,wait} from '@testing-library/react';

import {fetchShow as mockFetchShow} from "./api/fetchShow"
jest.mock("./api/fetchShow")  // Need to use both these to make a mock Fetch


describe("App Tests", ()=>{
    test('render without errors', () =>{
        render(<App/>);
    });
    test('renders show after season is selected', () =>{
        render(<App />)
        mockFetchShow.mockResolvedValueOnce(
            {       "id": 2993,
                    "url": "http://www.tvmaze.com/shows/2993/stranger-things",
                    "name": "Stranger Things",
                    "type": "Scripted",
                    "language": "English",
                    "genres": [
        "Drama",
        "Fantasy",
        "Science-Fiction"
    ],
    "status": "Running",
    "runtime": 60,
    "premiered": "2016-07-15",
    "officialSite": "https://www.netflix.com/title/80057281",
    "schedule": {
        "time": "",
        "days": [
            "Thursday"
        ]
    },
    "rating": {
        "average": 8.7
    },
    "weight": 98,
    "network": null,
    "webChannel": {
        "id": 1,
        "name": "Netflix",
        "country": null
    },
    "externals": {
        "tvrage": 48493,
        "thetvdb": 305288,
        "imdb": "tt4574334"
    },
    "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    "summary": "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    "updated": 1599468817,
    "_links": {
        "self": {
            "href": "http://api.tvmaze.com/shows/2993"
        },
        "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/1576476"
        }
    }
            }
        )
    })
})  



// test('fetches mission data and renders data', async () =>{
    //     render(<App/>);