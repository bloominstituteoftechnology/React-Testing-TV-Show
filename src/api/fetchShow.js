import React, { useState, useEffect } from "react";
import axios from 'axios';
import App from '../App';

export const fetchShow = () => {
    return axios
        .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            return res.data
        });
};

export default fetchShow;