import axios from 'axios';
import{ useState } from 'react';
import { formatSeasons } from "../utils/formatSeasons";



export default function fetchShow() {

    const [show, setShow] = useState(null);
    const [seasons, setSeasons] = useState([]);

    axios
        .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            console.log(res.data._embedded.episodes);
            setShow(res.data);
            setSeasons(formatSeasons(res.data._embedded.episodes));
        });
};
fetchShow();

// export default fetchShow;
  