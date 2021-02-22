import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App';
import fetchShow from './api/fetchShow';

jest.mock('./api/fetchShow');

const showData = {
    data: [
        {
            _links:
                {previousepisode:
                    {href:"https://api.tvmaze.com/episodes/1576476"},
            self:{
                href:"https://api.tvmaze.com/shows/2993"}
            },
            externals:{
                imdb:"tt4574334",
                thetvdb:305288,
                tvrage:48493
            },
            genres:[
                "Drama",
                "Fantasy",
                "Science-Fiction"
            ],
            id:2993,
            image:{
                medium:"https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                original:"https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
            },
            language:"English",
            name:"Stranger Things",
            network:null,
            officialSite:"https://www.netflix.com/title/80057281",
            premiered:"2016-07-15",
            rating:{
                average:8.7
            },
            runtime:60,
            schedule:{
                days:[],
                time:""
            },
            status:"Running",
            summary:"<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
            type:"Scripted",
            updated:1604039949,
            url:"https://www.tvmaze.com/shows/2993/stranger-things",
            webChannel:{
                country:null,
                id:1,
                name:"Netflix"
            },
            weight:98
        }
    ]
}

test('renders without errors', () => {
    fetchShow.mockResolvedValueOnce(showData);
    render(<App />);
});