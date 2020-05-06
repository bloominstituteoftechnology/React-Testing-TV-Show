import axios from "axios";

//          MUST BE STH LIKE THIS:
// export const fetchShow = () => {
//     return axios.get
//       .then(res => return res) // or res.data, however you want to set that up
//   }

export const fetchShow = () => {
	return axios
		.get(
			"https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
		)
		.then((res) => {
			console.log(res);
			return res;
		});
};
