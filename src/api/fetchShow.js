import axios from 'axios';

const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          console.log("res: ", res.data);
          return res;
      })
      .catch(err => {
          console.log("err: ", err);
          return err;
      })
}

export default fetchShow;