import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchShow as mockfetchShow } from './api/fetchShow';
import App from './App'
import userEvent from "@testing-library/user-event";


jest.mock("./api/fetchShow");

const obj = {
    externals: {tvrage: 48493, thetvdb: 305288, imdb: "tt4574334"},
genres: (3) ["Drama", "Fantasy", "Science-Fiction"],
id: 2993,
image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
language: "English",
name: "Stranger Things",
network: null,
officialSite: "https://www.netflix.com/title/80057281",
premiered: "2016-07-15",
rating: {average: 8.7},
runtime: 60,
schedule: {time: "", days: Array(0)},
status: "Running",
summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
type: "Scripted",
updated: 1604039949,
url: "http://www.tvmaze.com/shows/2993/stranger-things",
webChannel: {id: 1, name: "Netflix", country: null},
weight: 99,
_embedded: {episodes: [{airdate: "2016-07-15",
airstamp: "2016-07-15T12:00:00+00:00",
airtime: "",
id: 553946,
image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
name: "Chapter One: The Vanishing of Will Byers",
number: 1,
runtime: 60,
season: 1,
summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
type: "regular",
url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"}]},
_links:{
previousepisode: {href: "http://api.tvmaze.com/episodes/1576476"},
self: {href: "http://api.tvmaze.com/shows/2993"}}
}

test("App is rendering", async () => {
    mockfetchShow.mockResolvedValueOnce(obj);
    render(<App />);
    });

    test ("Season change correctly when selected", async () => {
        mockfetchShow.mockResolvedValueOnce(obj);
        const { getByText } = render(<App />);
        
        await waitFor(() => {
            getByText(/select a season/i);
        });
        const dropDown = getByText(/select a season/i);
        userEvent.click(dropDown);
        
        expect(getByText(/season 1/i)).toBeInTheDocument();

    });