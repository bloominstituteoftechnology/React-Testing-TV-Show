import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./components/Episodes";
import StrangerTestData from "./api/strangerTestData";

const episodes = [
  {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
    },
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/553946",
      },
    },
  },
];
//Arrange: render app
test("renders without errors", () => {
  render(<Episodes episodes={[]} />);
});

//Act/Assert:
// render component with an empty array prop in episodes
// we should have a length of 0 for that episode prop
// rerender with the episode data being passed into the prop
// find by testID named 'episode' and it should have one object passed in

test("renders changes in episodes list correctly", () => {
  const { rerender } = render(<Episodes episodes={[]} />);

  let episodeObjects = screen.queryAllByTestId("episode");
  expect(episodeObjects).toStrictEqual([]);
  expect(episodeObjects).toHaveLength(0);

  rerender(<Episodes episodes={episodes} />);
  episodeObjects = screen.queryAllByTestId("episode");
  expect(episodeObjects).toHaveLength(1);
});

///////MY FAILED FUCKING ATTEMPT/////////////
// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Episodes from "./components/Episodes";

test("does episodes render", async () => {
  const fakeData = jest.fn(StrangerTestData);
  //   console.log(StrangerTestData);
  render(<Episodes episodes={StrangerTestData._embedded.episodes} />); //// make sure you're accessing the right piece of data////
  const episode1 = await screen.findByText(
    /Chapter One: The Vanishing of Will Byers/i
  );
  /////image renders with alt text as name:///
  const episodeImg = await screen.findAllByAltText(
    /Chapter One: The Vanishing of Will Byers/i
  );
  expect(episodeImg).toHaveLength(1);
  //   console.log(episodeImg);
  const getSeasonNumber = await screen.getAllByTestId(/season-episode/i);
  console.log(getSeasonNumber[0]);
  //   expect(
  //     getSeasonNumber[0].__reactEventHandlers$w2cvqkt36w.children
  //   ).toHaveLength(4);

  //   expect(getSeasonNumber[0]).toBeInTheDocument();
  //   console.log(episode1); /// returning pending promise
});
