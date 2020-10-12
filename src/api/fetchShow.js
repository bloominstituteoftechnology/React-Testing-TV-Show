import axios from "axios";
import { formatSeasons } from "../utils/formatSeasons";

export const fetchShow = (setShow, setSeasons) => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => res.data);
};

// export const fetchShow = () => {
//   return axios
// }
