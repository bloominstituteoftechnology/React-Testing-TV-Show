import { render } from '@testing-library/react'
import React from "react"
import Episodes from './Episodes'

export const episodesFixtures=[
    {
    id:'bogusid',
    name:'my bogus epiode'
}
]


test("Episode renders", () =>{
    render (<Episodes episodes= {[]} />);
});

test("Episodes shows data when rerendered with a new episodes prop", () =>{
    const {queryAllByTestId, rerender} = render (<Episodes episodes={[]} />)

    expect(queryAllByTestId("episode")).toStrictEqual([]);
    expect(queryAllByTestId("episode")).toHaveLength(0);

    rerender(<Episodes episodes={episodesFixtures} />)

    expect(queryAllByTestId("episode")).toHaveLength(1);


});

// test("Episodes renders an error when error is indicated", ()=>{
//     const { getByTestId } =render(<Episodes error="my error"/>);

//     const ele = getByTestId("episodes-error");
//     console.log("kh:Episodes.test.js: ele", ele)
// })