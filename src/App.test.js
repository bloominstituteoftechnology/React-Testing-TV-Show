import React from 'react';
import App from './App';
import {render, fireEvent, waitFor, getByPlaceholderText, getByText} from '@testing-library/react';
import {fetchShow as mockFetchShow} from './api/fetchShow'


jest.mock('./api/fetchShow');

test('Episode info loads for each season wehen chosen from dopdown', async () => {
    //Arrange
    mockFetchShow.mockResolvedValueOnce(data);
    const {getByText, getAllByText} = render(<App/>);
    
    getByText(/fetching data.../i);

    await waitFor(() => {
      getByText(/Select a season/i)
    }) 
    //Act
    fireEvent.mouseDown(getByText(/Select a season/i));
    fireEvent.mouseDown(getByText(/Season 1/i));
    expect(getAllByText(/episode/i)).toHaveLength(8);
    //Assert


});

const data = [
   {
      "id":553946,
      "url":"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      "name":"Chapter One: The Vanishing of Will Byers",
      "season":1,
      "number":1,
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
   {
      "id":578664,
      "url":"http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
      "name":"Chapter Three: Holly, Jolly",
      "season":1,
      "number":3,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
      "image":{
         "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
         "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
      },
      "summary":"<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
      "_links":{
         "self":{
            "href":"http://api.tvmaze.com/episodes/578664"
         }
      }
   },
   {
      "id":578665,
      "url":"http://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
      "name":"Chapter Four: The Body",
      "season":1,
      "number":4,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
      "image":{
         "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",
         "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg"
      },
      "summary":"<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",
      "_links":{
         "self":{
            "href":"http://api.tvmaze.com/episodes/578665"
         }
      }
   },
   {
      "id":578666,
      "url":"http://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
      "name":"Chapter Five: The Flea and the Acrobat",
      "season":1,
      "number":5,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
      "image":{
         "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168922.jpg",
         "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168922.jpg"
      },
      "summary":"<p>Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.</p>",
      "_links":{
         "self":{
            "href":"http://api.tvmaze.com/episodes/578666"
         }
      }
   },
   {
      "id":578667,
      "url":"http://www.tvmaze.com/episodes/578667/stranger-things-1x06-chapter-six-the-monster",
      "name":"Chapter Six: The Monster",
      "season":1,
      "number":6,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
      "image":{
         "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168923.jpg",
         "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168923.jpg"
      },
      "summary":"<p>Jonathan manages to pull Nancy back to the real world from the Upside Down. Meanwhile, Lucas refuses to help with the search for Jane and goes to Hawkins Labs on his own, while Dustin and Mike look for the missing girl.</p>",
      "_links":{
         "self":{
            "href":"http://api.tvmaze.com/episodes/578667"
         }
      }
   },
   {
      "id":578668,
      "url":"http://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
      "name":"Chapter Seven: The Bathtub",
      "season":1,
      "number":7,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
      "image":{
         "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168925.jpg",
         "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168925.jpg"
      },
      "summary":"<p>Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.</p>",
      "_links":{
         "self":{
            "href":"http://api.tvmaze.com/episodes/578668"
         }
      }
   },
   {
      "id":578669,
      "url":"http://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down",
      "name":"Chapter Eight: The Upside Down",
      "season":1,
      "number":8,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
      "image":{
         "medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168926.jpg",
         "original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168926.jpg"
      },
      "summary":"<p>Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.</p>",
      "_links":{
         "self":{
            "href":"http://api.tvmaze.com/episodes/578669"
         }
      }
   }
]