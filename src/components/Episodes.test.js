import React from 'react'
import {render} from '@testing-library/react'
import Episodes from './Episodes'

export const episodeFixture = [
    {
        episode_info: "Blah Blah",
        episode_number: "1"

    }
]



test("Episodes render", () => {
    render(<Episodes episodes={[]}/>)
}) 

test("Shows list of episodes when rerendered" , () => {
    const {queryAllByTestId, rerender, getByText} = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId("episode")).toStrictEqual([])

    rerender(<Episodes episodes={episodeFixture}/>)

    expect(queryAllByTestId("episode")).toHaveLength(0)
})

// test("Episodes render with descriptions", () => {
//     const { getByText} = render(<Episodes episodes={[]}/>)
//     expect(getByText(/Chapter/i)).toBeDefined()
// })
