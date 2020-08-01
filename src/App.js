import React, { useState, useEffect } from "react";
import axios from 'axios';
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
import { fetchShow } from './api/fetchShow';
import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [showText, setShowText] = useState("");
  const [error, setError] = useState("");
  const [desiredShow, setDesiredShow] = useState([]);
  const [showApi, setShowApi] = useState(
    "https://api.tvmaze.com/singlesearch/shows?q=gravity-falls&embed=episodes"
  );
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow(showApi)
      .then((res) => {
        setShow(res.data);
        setError("");
        setSeasons(formatSeasons(res.data._embedded.episodes));
      })
      .catch((err) => {
        console.log("error in App", err);
        setError(err);
      });
  }, [showApi]);

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${showText}`)
      .then((response) => {
        setDesiredShow(response.data);
      });
  }, [showText]);

  const handleChanges = (e) => {
    if (error) {
      setError("");
    }
    setShowText(e.target.value);
  };
  const handleSubmit = (e) => {
    setSelectedSeason("");
    e.preventDefault();
    const showWords = showText.split(" ").join("-").toLowerCase();
    setShowApi(
      `https://api.tvmaze.com/singlesearch/shows?q=${showWords}&embed=episodes`
    );

    setShowText("");
  };

  const handleSelect = (e) => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="show"
          type="text"
          name="show"
          placeholder="Enter TV show"
          value={showText}
          onChange={handleChanges}
        />
      </form>

      {error ? (
        <p style={{ color: "red" }}>
          Could not find this show, please try another one.
        </p>
      ) : null}

      {show.image ? (
        <img className="poster-img" src={show.image.original} alt={show.name} />
      ) : (
        <p>Could not find an image for {show.name}</p>
      )}
      <h1 data-testid="show">{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        data-testid="season"
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
