import React from "react";
import {render} from "@testing-library/react";
import Episodes from "./Episodes";

const dummyData = [
    {
       "id":908678,
       "name":"spooky time",
       "season":1,
       "number":1,
       "runtime":60,
       "image":{ "medium":"mediumpic.img" },
       "summary":"<p>spooky stuff</p>",
       
    },
    {
        "id":905643,
        "name":"spooky time 2",
        "season":2,
        "number":2,
        "runtime":60,
        "image":{ "medium":"mediumpic.img" },
        "summary":"<p>spooky stuff 2</p>",
        
     }]

    test('renders episodes component', () => {

        const {rerender, getAllByTestId} = render(<Episodes episodes={[]} />)
        rerender(<Episodes episodes={dummyData} />)

        const episodes = getAllByTestId(/episode/i)
        expect(episodes).toHaveLength(2)
    }) 