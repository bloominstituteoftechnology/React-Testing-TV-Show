### Instructions and/or completion requirements

Your challenge for this module: write tests for both the `App.js` component and the `Episodesjs` component. Take note of where the state is being managed, where the async call is, and where different data peices are being rendered. Understanding all of this will be important so you know how to test each component.

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
// fetchShow.js
export const fetchShow = () => {
  return axios.get
    .then(res => return res) // or res.data, however you want to set that up
}
  
 // App.js
useEffect(() => {
  fetchShow
    .then(res => {
      // set state with the data
    }
}, []);
```

### Stretch goals

- There is an utility function in this project that contains an isolated pure function. Look up how to do `unit tests` with Jest and test that function.

- Look up the `TVMaze` API. Add a dropdown with the titles of some other popular shows. Add the user sequence of choosing a different show to fetch data for different shows.

- Add React Router, and add the functionality to click an episode and navigate to an episode page.
