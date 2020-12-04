import React from "react";
import { render } from '@testing-library/react';
import Episodes from './Episodes';

export const episodeFixture =[{
    episode_name:"episode one",
    episode_id:"epsiode_one",
    summary:"summary of episode one"
},
{
    episode_name:"episode two",
    episode_id:"epsiode_two",
    summary:"summary of episode two"
}
]

test("Episode renders", () =>{
    expect(() => render(<Episodes episodes={[]} error=""/>)).not.toThrow;
})

// test("Episode shows data when rerendered with new submission data", () =>{
//     const {queryAllByTestId, rerender, getByText}= render(<Episodes episodes={[]} error="" />);

//     expect(queryAllByTestId("episode")).toStrictEqual([]);
//     expect(queryAllByTestId("episode")).toHaveLength(0)

//     rerender(<Episodes error="" episodes={episodeFixture}/>)

//     expect(queryAllByTestId("episode")).toHaveLength(2)

//     const error ="My dumb error";
//     rerender(<Episodes error={error}/>)

//     expect(() => getByText(error)).not.toThrow
//     expect(queryAllByTestId("episode")).toHaveLength(0)
// });
test("Episode shows data when rerendered with new submission data",() =>{
    const {queryAllByTestId,rerender, getByText} = render(<Episodes episodes={[]} error="" />);

    expect(queryAllByTestId("episode")).toStrictEqual([]);
    expect(queryAllByTestId("episode")).toHaveLength(0)

    rerender(<Episodes error="" episodes={episodeFixture} />)

    expect(queryAllByTestId("episode")).toHaveLength(2)

    const error="My dumb error";
    rerender(<Episodes episodes={[]} error={error} />)

    expect(() => getByText(error)).not.toThrow
    expect(queryAllByTestId("episode")).toHaveLength(0)
});

test("Episode renders with summary", () => {
    const {getByText} = render(<Episodes episodes={episodeFixture} error="" />)

    expect(getByText(/summary of episode one/i)).toBeDefined()
})