import axios from "axios";

export const fetchShow = (showName) => {
  return axios
    .get(`https://api.tvmaze.com/singlesearch/shows?q=${showName}&embed=episodes`)
    .then(res => {
      console.log('ea: fetchshow.js results:', res);
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};