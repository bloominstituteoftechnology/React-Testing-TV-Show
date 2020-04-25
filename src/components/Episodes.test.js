import React from "react";
import { render, queryByTestId, wait } from "@testing-library/react";
import Episodes from "./Episodes";
// import App from "../App";



const episode1 = [
    {
      id: 4740,
      url:
        'http://www.tvmaze.com/episodes/4740/criminal-minds-1x01-extreme-aggressor',
      name: 'Extreme Aggressor',
      season: 1,
      number: 1,
      airdate: '2005-09-22',
      airtime: '22:00',
      airstamp: '2005-09-23T02:00:00+00:00',
      runtime: 60,
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_landscape/14/35564.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/14/35564.jpg'
      },
      summary:
        "<p>CRIMINAL MINDS revolves around an elite team of FBI profilers who analyze the country's most twisted criminal minds, anticipating their next moves before they strike again.</p>",
      _links: { self: { href: 'http://api.tvmaze.com/episodes/4740' } }
    }
  ];

test("first episode renders", () => {
    const { getByText } = render(<Episode/>);
})