import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      return res.data
      // setShow(res.data);
      // setSeasons(formatSeasons(res.data._embedded.episodes));
    })
    .catch(error => {
      console.log("error fetching data from api", error.message);
      return error;
    });
};
