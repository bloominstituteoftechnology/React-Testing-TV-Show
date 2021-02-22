import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from './Episodes';

const episodeData = [
    {
        _links: {
            self:{
                href: "https://api.tvmaze.com/episodes/909342"
            },
         },
         airdate: "2017-10-27",
        airstamp: "2017-10-27T12:00:00+00:00",
        airtime:"",
        id: 909342,
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg"
        },
        name: "Chapter Two: Trick or Treat, Freak",
        number: 2,
        runtime: 60,
        season: 2,
        summary: "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
        type: "regular",
        url: "https://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak"


    }
]

test('renders without errors', () => {
    render(<Episodes episodes={[]}/>);
});

test('re-renders properly with episode data', () => {
    const { rerender } =render(<Episodes episodes={[]}/>);

    expect(screen.queryByText(/season/i)).toBeNull();

    rerender(<Episodes episodes={[episodeData]} />);

    expect(screen.getByText(/season/i)).toBeInTheDocument();
})