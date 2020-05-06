

// 3. Move `fetchShow` into that new file and export it (fetchShow is in the `useEffect` - pay attention to how this was setting state. You will still need to set state in this effect hook the exact same way...)

import axios from "axios";

export const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.log(err)
            return err
        })
}


// 4. Import `fetchShow` into `App.js` so you can make your async call from your `useEffect` hook.

// 5. You will need to `return` the `axios.get` call, _and_ the data inside your `.then()`. This is necessary because when you call `fetchShow` in your useEffect, you need to chain off the promise for a new `.then()`, then you need the data to be returned once the promise is resolved

// 6. Inside your `.then()` in the `useEffect` hook, set your data again.
