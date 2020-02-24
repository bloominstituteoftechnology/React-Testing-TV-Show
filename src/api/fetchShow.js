import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatSeasons } from '../utils/formatSeasons';

const [show, setShow] = useState(null);
const [seasons, setSeasons] = useState([]);

export const fetchShow = () => { 
    return axios.get
    ("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
      });
  }
