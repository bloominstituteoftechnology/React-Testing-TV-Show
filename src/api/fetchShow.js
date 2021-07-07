import axios from 'react'



export const fetchShow = () =>{
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
      })
      .catch(err =>{
          console.error("fetching error")
      })

    
};



// useEffect(() => {
//     const fetchShow = () => {
//       axios
//         .get(
//           "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//         )
//         .then(res => {
//           setShow(res.data);
//           setSeasons(formatSeasons(res.data._embedded.episodes));
//         });
//     };
//     fetchShow();
//   }, []);

  export default fetchShow;