import React from "react"
import { redender, render } from "@testing-library/react"
import Episodes from "./Episodes"


const testEpisodes = [
  {
    id: 553946,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    },
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    runtime: 60,
  },
  {
    id: 578663,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
    },
    name: "Chapter Two: The Weirdo on Maple Street",
    season: 1,
    number: 2,
    summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    runtime: 60,
  },
]

test("reredender correctly", () => {
  // arrange (render the component and set up mock data)
  // render(<Episodes episodes={[]} />)
  const episodesData = []

  const { rerender, getAllByTestId, queryAllByTestId, debug } = render(<Episodes episodes={[]} />)
  // act rerendnder the componet with data passed in
  debug()
  rerender(<Episodes episodes={testEpisodes} />)
  const episodes = getAllByTestId(/episodes/i)
  console.log("return some data", Episodes)
  debug()
  // // assert
  expect(episodes).toHaveLength(2)
})
