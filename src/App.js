import React, { useState, useEffect } from "react";
// import axios from "axios";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
import { formatSeasons } from "./utils/formatSeasons";
// import { fetchShow } from "./api/fetchShow";
import Episodes from "./components/Episodes";
import "./styles.css";
import { fetchShow } from "./api/fetchShow";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  // const getShow = async () => {
  //   fetchShow()
  //   const res = await fetchShow();
  //   setShow().then((res) => {
  //     setShow(res.data);
  //     setSeasons(formatSeasons(res.data._embedded.episodes))
  //   })
  // }
  //// async and await method...//////
  useEffect(() => {
    async function fetchData() {
      ///try catch method////
      try {
        const res = await fetchShow();
        // console.log("await res", res); /// add this back after testing
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  ///////.then and .catch method/////
  // useEffect(() => {
  //   fetchShow()
  //     .then((res) => {
  //       setShow(res.data);
  //       setSeasons(formatSeasons(res.data._embedded.episodes));
  //     })
  //     .catch((err) => {
  //       setShow(false);
  //       setSeasons(err.message);
  //     });
  // }, []);
  ////////////END/////////

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
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
