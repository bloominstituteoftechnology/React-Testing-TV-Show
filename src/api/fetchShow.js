import axios from 'axios';

// const [show, setShow] = useState(null);
// const [seasons, setSeasons] = useState([]);


export const fetchShow = () => {
    debugger;
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            return res.data;
        })
        .catch((err) => console.log(err));
  };