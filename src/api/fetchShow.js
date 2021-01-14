import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res;
      //   setShow(res.data);
      //   setSeasons(formatSeasons(res.data._embedded.episodes));
    })
    .catch(err => console.log(err))
};