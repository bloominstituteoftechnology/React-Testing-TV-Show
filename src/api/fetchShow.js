import axios from 'axios'

const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => {
        console.log(res)
        return res
    })
    .catch(error => {
        console.error(error.message)
        return error
    })
}

export default fetchShow;