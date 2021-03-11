import axios from 'axios'

const fetchShow = () => {
    return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        console.log('THIS IS RES.DATA FROM fetchShow', res.data)
        return res;
      });
}
export default fetchShow;