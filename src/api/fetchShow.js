import axios from "axios";

const fetchShow = () => {
  return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => {
      console.log("res from api call: ", res);
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};

export default fetchShow;

// Refactored from the useEffect in App: 

// useEffect(() => {
//   const fetchShow = () => {
//     axios
//       .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
//       .then(res => {
//         setShow(res.data);
//         setSeasons(formatSeasons(res.data._embedded.episodes));
//       });
//   };
//   fetchShow();
// }, []);




