import React, { useState, useEffect } from "react";
<<<<<<< HEAD
// import axios from "axios";
=======
>>>>>>> 0c5d3ee399b31009f03fdad8b8318a02990ec8c7
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";
import { fetchShow } from "./api/fetchShow";

import Episodes from "./components/Episodes";
import "./styles.css";
import { fetchShow } from "./api/fetchShow";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow().then(res => {
    fetchShow()
    .then(res => {
      console.log(res)
      setShow(res);
      setSeasons(formatSeasons(res._embedded.episodes));
    })
    .catch(err => console.log(err))
  }, []);

  const handleSelect = (e) => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Loading data...</h2>;
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
        data-testid="dropdown"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}