
import axios from "axios";

export const fetchShow = async () => {
    const res = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes");
    return res;
    
  };
  //"https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"