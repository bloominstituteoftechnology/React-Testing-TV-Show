import axios from 'axios';

export const fetchShow = (showApi) => {
    return axios
      .get(
        showApi
        // "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          console.log("nb: fetchShow.js: fetchShow: res: ", res.data);
          return res;
      })
      .catch(err => {
          console.log("err: ", err);
          return err;
      })
}

// export default fetchShow;