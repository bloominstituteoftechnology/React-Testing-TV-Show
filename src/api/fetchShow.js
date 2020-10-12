import axios from "axios";
import { formatSeasons } from "../utils/formatSeasons";

export const fetchShow = (setShow, setSeasons) => {
  axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    });
};
