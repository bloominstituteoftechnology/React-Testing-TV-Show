<<<<<<< HEAD
import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
  
=======
import axios from 'axios';

export const fetchShow = () => {
    return axios.get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        return res.data;
    })
    .catch(err => err)
>>>>>>> 0c5d3ee399b31009f03fdad8b8318a02990ec8c7
};