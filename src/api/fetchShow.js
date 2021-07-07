import axios from 'axios';

const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes';


export const fetchShow = () => {
    return axios.get(url).then(res => res.data) 
  }