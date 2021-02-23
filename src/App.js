import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    const fetchShow = () => {
      axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
          console.log(res.data)
          setShow(res.data);
          setSeasons(formatSeasons(res.data._embedded.episodes));
        });
    };
    fetchShow();
  }, []);

// setShow([{id:2993,url:"https://www.tvmaze.com/shows/2993/stranger-things",name:"Stranger Things",type:"Scripted",language:"English",genres:["Drama","Fantasy","Science-Fiction"],status:"Running",runtime:60,premiered:"2016-07-15",officialSite:"https://www.netflix.com/title/80057281",schedule:{time:"",days:[]},rating:{average:8.7},weight:98,network:null,webChannel:{id:1,name:"Netflix",country:null},externals:{tvrage:48493,thetvdb:305288,imdb:"tt4574334"},image:{medium:"https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},summary:"<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",updated:1604039949,_links:{self:{href:"https://api.tvmaze.com/shows/2993"},previousepisode:{href:"https://api.tvmaze.com/episodes/1576476"}},_embedded:
// {episodes:[
//     {id:553946,url:"https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",name:"Chapter One: The Vanishing of Will Byers",season:1,number:1,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},summary:"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/553946"}}},{id:578663,url:"https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",name:"Chapter Two: The Weirdo on Maple Street",season:1,number:2,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"},summary:"<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/578663"}}},{id:578664,url:"https://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",name:"Chapter Three: Holly, Jolly",season:1,number:3,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"},summary:"<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/578664"}}},]}}])
  
  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
