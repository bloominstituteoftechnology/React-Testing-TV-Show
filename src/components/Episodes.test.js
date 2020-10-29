//for episods we can test for the change of props
//the props in episods is an object with key episods with value array of 8 objects
import React from "react";
import Episodes from "./Episodes";
import {render} from "@testing-library/react";
//find when we work with an async api call



//its an integration test
//we want to make sure that when the real data comes in the component rerenders and props change from an empty array to the data we ask for when we choose the season
test("episodes shows a list of episodes when rerendering with new data", () => {
    //Arrange
    //we get a container with a bunch of stuff and matchers and instead of keeping all that in memory we are distructurasing here:
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>)
    //mini assertion: make sure that there are no episodes yet when it first renders
    //we're looking to assert that there is no math that the episods are not there
const initalEpisodes = queryAllByTestId(/episode/i);
expect(initalEpisodes).toHaveLength(0);
//or you can use to equal not to be because they are not the same object but they have the same value
//Act
rerender(<Episodes episodes={data}/>);
//make sure there is something on the page
const episodes = queryAllByTestId(/episode/i);
//Assert
//2 episodes should have rendered to the page
expect(episodes).toHaveLength(2);
console.log(episodes.length);

})

//mock the props data
const data = [
    {
        "id":553946,
        "url":"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name":"Chapter One: The Vanishing of Will Byers",
        "season":1,
        "number":1,
        "type":"regular",
        "airdate":"2016-07-15",
        "airtime":"",
        "airstamp":"2016-07-15T12:00:00+00:00",
        "runtime":60,
        "image":{
           "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
           "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary":"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        "_links":{
           "self":{
              "href":"http://api.tvmaze.com/episodes/553946"
           }
        }
     },
     {
        "id":578663,
        "url":"http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name":"Chapter Two: The Weirdo on Maple Street",
        "season":1,
        "number":2,
        "type":"regular",
        "airdate":"2016-07-15",
        "airtime":"",
        "airstamp":"2016-07-15T12:00:00+00:00",
        "runtime":60,
        "image":{
           "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
           "original":"http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
        },
        "summary":"<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        "_links":{
           "self":{
              "href":"http://api.tvmaze.com/episodes/578663"
           }
        }
     },
]