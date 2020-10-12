import React from 'react';
import axios from 'axios';
import{ useState } from 'react';
import { formatSeasons } from "../utils/formatSeasons";



const FetchShow = () => {

    const [show, setShow] = useState(null);
    const [seasons, setSeasons] = useState([]);

    const fetch = () => {

        axios
            .get(
                "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
            )
            .then(res =>  {
                console.log(res.data._embedded.episodes);
                setShow(res.data);
                setSeasons(formatSeasons(res.data._embedded.episodes));
            });
    }


    return (show, setShow, seasons, setSeasons, fetch);

}

export default FetchShow;
  