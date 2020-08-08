import axios from 'axios';

export const fetchShow = () => {
    return axios
      .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(res => {
        console.log('Axios response from fetchShow.js', res)
        return res;})
      .catch(err => {return err});
};