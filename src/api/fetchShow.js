import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things"
    )
    .then((res) => {
      console.log("SV: fetchShow.js: fetchShow: response", res);
      return res.data;
    })
    .catch((err) => {
      console.log("SV: fetchShow.js: fetchShow: error", err.message);
      return err;
    });
};