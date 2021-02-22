import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

const mockData = {
        "id": 2993,
        "url": "http://www.tvmaze.com/shows/2993/stranger-things",
        "name": "Stranger Things",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Fantasy",
            "Science-Fiction"
        ],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-07-15",
        "officialSite": "https://www.netflix.com/title/80057281",
        "schedule": {
            "time": "",
            "days": []
        },
        "rating": {
            "average": 8.7
        },
        "weight": 99,
        "network": null,
        "webChannel": {
            "id": 1,
            "name": "Netflix",
            "country": null
        },
        "externals": {
            "tvrage": 48493,
            "thetvdb": 305288,
            "imdb": "tt4574334"
        },
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
        },
        "summary": "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        "updated": 1604039949,
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/shows/2993"
            },
            "previousepisode": {
                "href": "http://api.tvmaze.com/episodes/1576476"
            }
        },
        "_embedded": {
            "episodes": [
                {
                    "id": 553946,
                    "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                    "name": "Chapter One: The Vanishing of Will Byers",
                    "season": 1,
                    "number": 1,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 60,
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
                    },
                    "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/episodes/553946"
                        }
                    }
                },
                {
                    "id": 578663,
                    "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                    "name": "Chapter Two: The Weirdo on Maple Street",
                    "season": 1,
                    "number": 2,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 60,
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
                    },
                    "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/episodes/578663"
                        }
                    }
                },
                {
                    "id": 578664,
                    "url": "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
                    "name": "Chapter Three: Holly, Jolly",
                    "season": 1,
                    "number": 3,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 60,
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
                    },
                    "summary": "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/episodes/578664"
                        }
                    }
                },
                {
                    "id": 578665,
                    "url": "http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
                    "name": "Chapter Four: The Body",
                    "season": 1,
                    "number": 4,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 60,
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg"
                    },
                    "summary": "<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/episodes/578665"
                        }
                    }
                },
            ]
            }
        }

test('renders without errors', ()=> {
    mockFetchShow.mockResolvedValueOnce({
        data: mockData
    })
    render(<App />);
});

test('render season data when the dropdown is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce({
        data: mockData
    })
    render(<App />);
   //Act: dropdown button found by text
    const dropdown = await screen.findByText(/select a season/i);
    userEvent.click(dropdown);
    // Season 1 found after clicking 'Select a Season' and click on that option of the drop down
    const firstSeason = await screen.findByText(/season 1/i);
    expect(firstSeason).toBeInTheDocument();
    userEvent.click(firstSeason);

    await waitFor(() => {
        //Assert: we should get the number of episodes within the season as our api returned, based on mockData
        expect(screen.getAllByTestId(/episode/i)).toHaveLength(4);
    })

})