import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

const episodesData = [
  {
    id: 578665,
    url:
      "http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
    name: "Chapter Four: The Body",
    season: 1,
    number: 4,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg",
    },
    summary:
      "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/578665",
      },
    },
  },
  {
    id: 578666,
    url:
      "http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
    name: "Chapter Five: The Flea and the Acrobat",
    season: 1,
    number: 5,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg",
    },
    summary:
      "<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/578666",
      },
    },
  },
  {
    id: 578667,
    url:
      "http://www.tvmaze.com/episodes/578667/stranger-things-1x06-chapter-six-the-monster",
    name: "Chapter Six: The Monster",
    season: 1,
    number: 6,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168923.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168923.jpg",
    },
    summary:
      "<p>Jonathan manages to pull Nancy back to the real world from the Upside Down. Meanwhile, Lucas refuses to help with the search for Jane and goes to Hawkins Labs on his own, while Dustin and Mike look for the missing girl.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/578667",
      },
    },
  },
];

test("re-renders correctly with a list of episodes", () => {
    //arrange (render component and set up mock data)
    const { rerender, getAllByText, queryAllByText } = render(
        <Episodes episodes={[]}/>
    )

    //assert that there are no episodes yet
    const episodesList = queryAllByText(/episode/i)
    expect(episodesList).toHaveLength(0)

    // //act (re-render the component with episodes data passed in)

    rerender(<Episodes episodes={episodesData}/>);
    const episodes = getAllByText(/episode/i )

    // assert 

    expect(episodes).toHaveLength(3)
})
