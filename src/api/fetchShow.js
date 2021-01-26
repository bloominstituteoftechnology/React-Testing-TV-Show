import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      //   console.log("fetchShow then got response", res);
      return res;
    })
    .catch((err) => {
      console.error("error fetching data from api", err.message);
    });
};
fetchShow();
