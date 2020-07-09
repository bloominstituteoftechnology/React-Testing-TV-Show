import axios from 'axios';

export const fetchShow = (api) => {
    return axios.get(api)
        .then (res => {
            return res;
        })
};

export default fetchShow;
