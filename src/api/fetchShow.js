import axios from 'axios'

export const fetchShow = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then((res) => {
        console.log('AXIOS RES',res)
        return res.data;
    })
    .catch((err) => {
        console.error('Error Message', err.message)
        return err
    })
}