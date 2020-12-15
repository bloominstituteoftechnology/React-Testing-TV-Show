import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

const data = [
    {
        "id":909344,
        "url":"http://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise",
        "name":"Chapter Four: Will the Wise",
        "season":2,
        "number":4,
        "type":"regular",
        "airdate":"2017-10-27",
        "airtime":"",
        "airstamp":"2017-10-27T12:00:00+00:00",
        "runtime":60,
        "image":{
            "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/132/332045.jpg",
            "original":"http://static.tvmaze.com/uploads/images/original_untouched/132/332045.jpg"
        },
        "summary":"<p>After his encounter with the shadow creature, Will's condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.</p>",
        "_links":{
            "self":{
                "href":"http://api.tvmaze.com/episodes/909344"
            }
        }
    }];

test('renders episodes component', () => {

    const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);
    rerender(<Episodes episodes={data} />);

    const episodes = getAllByTestId(/episode/i);
    expect(episodes).toHaveLength(1);
});