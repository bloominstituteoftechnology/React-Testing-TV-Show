import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";
import { fetchShow } from './api/fetchShow';
import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const showName = "stranger-things";
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow(showName)
      .then(res => {
       // console.log('ea: App.js useEffect fetchShow results:',res.data);
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
        
      })
      .catch(err => {
        console.log('Error fetchShow:', err)
      });
  }, []);

  const handleSelect = (e) => {
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
        label="dropdown"
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
