import React from "react";

import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

const episodesData = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: ["Thursday"],
    },
    rating: {
      average: 8.7,
    },
    weight: 99,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
    },
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1586341552,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2993",
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476",
      },
    },
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
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
        {
          id: 578664,
          url:
            "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
          name: "Chapter Three: Holly, Jolly",
          season: 1,
          number: 3,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
          },
          summary:
            "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/578664",
            },
          },
        },
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
        {
          id: 578668,
          url:
            "http://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
          name: "Chapter Seven: The Bathtub",
          season: 1,
          number: 7,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg",
          },
          summary:
            "<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/578668",
            },
          },
        },
        {
          id: 1752754,
          url:
            "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
          name: "Chapter One: The Hellfire Club",
          season: 4,
          number: 1,
          airdate: "",
          airtime: "",
          airstamp: null,
          runtime: 60,
          image: null,
          summary: null,
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1752754",
            },
          },
        },
        {
          id: 1576473,
          url:
            "http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
          name: "Chapter Five: The Flayed",
          season: 3,
          number: 5,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 52,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg",
          },
          summary:
            "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576473",
            },
          },
        },
        {
          id: 1576474,
          url:
            "http://www.tvmaze.com/episodes/1576474/stranger-things-3x06-chapter-six-e-pluribus-unum",
          name: "Chapter Six: E Pluribus Unum",
          season: 3,
          number: 6,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511681.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511681.jpg",
          },
          summary:
            "<p>Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576474",
            },
          },
        },
        {
          id: 1576475,
          url:
            "http://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite",
          name: "Chapter Seven: The Bite",
          season: 3,
          number: 7,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 55,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/511708.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/511708.jpg",
          },
          summary:
            "<p>El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576475",
            },
          },
        },
        {
          id: 1576476,
          url:
            "http://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt",
          name: "Chapter Eight: The Battle of Starcourt",
          season: 3,
          number: 8,
          airdate: "2019-07-04",
          airtime: "",
          airstamp: "2019-07-04T12:00:00+00:00",
          runtime: 78,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510105.jpg",
          },
          summary:
            "<p>The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1576476",
            },
          },
        },
      ],
    },
  },
};

test("sucessfully renders data from api", async () => {
  mockFetchShow.mockResolvedValueOnce(episodesData);
  const { getByText, getAllByText, queryByText } = render(<App />);

  //mockFetchshow only called once when DOM mount
  expect(mockFetchShow).toHaveBeenCalledTimes(1);

  getByText(/fetching data.../i);

  await waitFor(() => {
    getAllByText(/stranger things/i);
  });

  expect(queryByText(/fetching data.../i)).toBeNull();

  fireEvent.mouseDown(getByText(/Select a season/i));
  fireEvent.mouseDown(getByText(/Season 1/i));
  expect(getAllByText(/episode/i)).toHaveLength(6);
});