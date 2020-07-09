import React from "react";
import App from "./App";
import {render, waitFor, fireEvent} from "@testing-library/react";
import {fetchShow as mockFetchShow} from "./api/fetchShow";

jest.mock("./api/fetchShow");

const mockData = {
    image: { original: "original" },
    name: "name",
    summary: "<p>summary</p>",
    _embedded: {
        episodes: [
            {
                id: "1",
                image: { medium: "medium_image" },
                name: "name",
                season: 3,
                number: 2,
                summary: "<p>Summary</p>",
                runtime: 20,
            },
        ],
    },
};

const brokeData = {
    data: [
        {
            id: 553946,
            url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
            name: "Chapter One: The Vanishing of Will Byers",
            season: 1,
            number: 1,
            airdate: "2016-07-15",
            airtime: "",
            airstamp: "2016-07-15T12:00:00+00:00",
            runtime: 60,
            image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
            },
            summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
            _links: {"self": {"href": "http://api.tvmaze.com/episodes/553946"}}
        },
        {
            id: 1576473,
            url: "http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
            name: "Chapter Five: The Flayed",
            season: 3,
            number: 5,
            airdate: "2019-07-04",
            airtime: "",
            airstamp: "2019-07-04T12:00:00+00:00",
            runtime: 52,
            image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg"
            },
            "summary": "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
            "_links": {"self": {"href": "http://api.tvmaze.com/episodes/1576473"}}
        },
    ],
    image: {
        medium:
            "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        original:
            "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
};

test("Renders app and tests components", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    const {rerender, getByTestId, getAllByTestId} = render(<App/>);

    await getAllByTestId(/moviePoster/i);
    const moviePoster = getAllByTestId(/moviePoster/i);
    await expect(moviePoster).toHaveLength(1);

    const dropdown = getByTestId(/dropdown/i);
    fireEvent.click(dropdown);


});

/*
test("Renders app and tests it", async () => {
    mockFetchMissions.mockResolvedValueOnce(missions);
    const {rerender, getByRole, findByText, getAllByTestId} = render(<App/>);
    const button = getByRole("button", {name: /get data/i});

    //click on the button
    //fetching message rendered
    //api call initiated
    //for tv project use userEvent instead of fireEvent
    fireEvent.click(button);
    await findByText(/we are fetching data/i);

    //component waits for api, then renders data that is returned
    //use the waitfor to wait for the api call to resolve
    await waitFor(()=>{
        expect(getAllByTestId(/mission/i)).toHaveLength(10);
    });
});
 */