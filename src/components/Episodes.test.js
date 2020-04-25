import React from "react";
import { render } from "@testing-library/react";

import Episodes from './Episodes';



test("Episodes renders", () => {
    render(<Episodes  episodes={[]}/> ); 

})


test("renders Episodes with valid Episodes", () => {
    const mockData = [{ id: 'id1',
name:"Episode one", image:"img one", season:'season one',number:"number one", runtime:"run one"
}];
const {queryAllByText, rerender} = render(<Episodes episodes={[]}/>)
let allEpisodes = queryAllByText(/e/i);
expect(allEpisodes).toHaveLength(0);
expect(allEpisodes).toStrictEqual([]);



rerender(<Episodes episodes={mockData}/>);
allEpisodes = queryAllByText(/e/i)
expect(allEpisodes).toHaveLength(3)
}) 