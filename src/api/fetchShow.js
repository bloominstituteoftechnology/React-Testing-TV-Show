import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      alert("There was an error processing your request:", err);
    });
};
