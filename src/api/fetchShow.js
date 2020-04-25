import axios from "axios";

const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=criminal+minds&embed=episodes")
    .then(response => {
        return response;
    });
}

export default fetchShow;