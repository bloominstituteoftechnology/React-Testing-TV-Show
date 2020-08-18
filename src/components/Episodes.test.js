import React from "react"
import {render} from "@testing-library/react"
import Episodes from "./Episodes"
const episodesData = [{airdate: "2016-07-15",
airstamp: "2016-07-15T12:00:00+00:00",
airtime: "",
id: 553946,
image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
name: "Chapter One: The Vanishing of Will Byers",
number: 1,
runtime: 60,
season: 1,
summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers", links:
{self: {href: "http://api.tvmaze.com/episodes/553946"}}}, {airdate: "2019-07-04",
airstamp: "2019-07-04T12:00:00+00:00",
airtime: "",
id: 1576473,
image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg"},
name: "Chapter Five: The Flayed",
number: 5,
runtime: 52,
season: 3,
summary: "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
url: "http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
_links:
{self: {href: "http://api.tvmaze.com/episodes/1576473"}}}]
test('should render the Episodes component without crashing', () => {
    //arrange (render the component snd set up mock data)
   const {rerender, getAllByTestId} = render(<Episodes episodes={[]} />)
    //act (re-render the component with the episodes data)
    rerender(<Episodes episodes={episodesData} />)
    //assert
  const episodes = getAllByTestId(/episode/i)
  expect(episodes).toHaveLength(2)
})