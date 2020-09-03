import axios from "axios";

const fetchShow = (url) => {
  return axios
    .get(url)
    .then(res => res);
};

export default fetchShow;