import axios from 'axios'

export const fetchshow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      return (res);
      // console.log(res)
    })
    .catch(err => {
      return err
    })