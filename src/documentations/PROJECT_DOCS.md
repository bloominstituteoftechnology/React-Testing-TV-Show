**MVP REQUIREMENTS**

### Instructions and/or completion requirements

Your challenge for this module: write tests for both the `App.js` component and the `Episodes.js` component. Take note of where the state is being managed, where the async call is, and where different data pieces are being rendered. Understanding all of this will be important so you know how to test each component.

**Moving the async call**

The async call being inside the component makes it hard to test the asynchronous nature of the component. Let's move the async function into an `/api` directory so we can easily mock that function and make the async tests easier.

1. Create a directory called `/api` in the `src` directory
1. Create a file inside `/api` called `fetchShow.js`
1. Move `fetchShow` into that new file and export it (fetchShow is in the `useEffect` - pay attention to how this was setting state. You will still need to set state in this effect hook the exact same way...)
1. Import `fetchShow` into `App.js` so you can make your async call from your `useEffect` hook.
1. You will need to `return` the `axios.get` call, _and_ the data inside your `.then()`. This is necessary because when you call `fetchShow` in your useEffect, you need to chain off the promise for a new `.then()`, then you need the data to be returned once the promise is resolved
1. Inside your `.then()` in the `useEffect` hook, set your data again.

- Note that you need `axios` in the new file

This should look something like this:

```javascript
import axios from 'axios'

import axios from 'axios'

const fetchShow = () => {
    return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        console.log('THIS IS RES.DATA FROM fetchShow', res.data)
        return res;
      });
}
export default fetchShow;

  
  useEffect(() => {
      fetchShow()
      .then(res => {
      setShow(res.data)
      setSeasons(formatSeasons(res.data._embedded.episodes))
      console.log('THIS IS RES.DATA FROM APP', res.data)
      console.log('THIS IS EPISODE DATA FROM APP', res.data._embedded.episodes)
    })
  }, []);

  - So much data in the api - will set up mock Data Structure with only what is needed

  name: '',
  image {original: 'link'},
  summary: "string",
  _embedded: {
    episodes: [
      {
        clip an episode data and throw it in here 
      }
    ]
  }

  AT THIS POINT ONE WRITTEN TEST IN APP.TEST.JS is running and working. Project no longer broken. 

  Continue with test writing

  testing in app.js

  - 1. sanity check 
  - 2. test displays episode data on button click

