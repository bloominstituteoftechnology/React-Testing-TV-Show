import axios from "axios";



export const fetchShow = (url) => {
    return axios
        .get(url)
      .then((res) => {return res}) // or res.data, however you want to set that up

  }

