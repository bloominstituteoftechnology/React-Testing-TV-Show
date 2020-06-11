import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";
import { fetchShow } from "./api/fetchShow";
import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const [showName, setShowName] = useState("");
  const options = [
    "Stranger-Things",
    "Simpsons",
    "Westworld",
    "Game-of-Thrones",
    "Rick-and-Morty",
    "Doctor-Who",
  ];
  const [show, setShow] = useState("");
  const [toggleShow, setToggleShow] = useState(true);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    if (showName !== ""){
      fetchShow(showName)
        .then((res) => {
          // console.log('ea: App.js useEffect fetchShow results:',res.data);
          setShow(res.data);
          setSeasons(formatSeasons(res.data._embedded.episodes));
        })
        .catch((err) => {
          console.log("Error fetchShow:", err);
      });
    }
  }, [showName]);

  const handleSelect = (e) => {
    console.log(e.value);
    setSelectedSeason(e.value);
  };
  const toggle = () => {
    setToggleShow(!toggleShow);
  };
  const handleShowSelect = (e) => {
    setShowName(e.value);
    //clear selected season for new show
    setSelectedSeason("");
    toggle();
  };
  if (showName === ""){
    return <div className="App"><Dropdown
    label="dropdown"
    options={options}
    onChange={handleShowSelect}
    value={show.name}
    placeholder="Select a Show"
  /></div>
  }
  if (!show) {
    return <h2>Fetching data...</h2>;
  }
  const bgStyle = {
    backgroundImage: `url(${show.image.original})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    backgroundColor: "#337",
    backgroundBlendMode: "soft-light",
  };
  return (
    <div className="App">
      <div className="poster-banner" style={bgStyle}>
        <img className="poster-img" src={show.image.medium} alt={show.name} />
      </div>
      <div className="show-info">
        {toggleShow ? (
          <div className="showTitle" onClick={toggle}>
            <h1 data-testid="showName">{show.name}</h1>
          </div>
        ) : (
          <Dropdown
            label="dropdown"
            options={options}
            onChange={handleShowSelect}
            value={show.name || "Select a show"}
            placeholder="Select an Show"
          />
        )}

        {parse(show.summary)}

        <Dropdown
          label="dropdown"
          options={Object.keys(seasons)}
          onChange={handleSelect}
          value={selectedSeason || "Select a season"}
          placeholder="Select a season"
        />
        <Episodes episodes={episodes} />
      </div>
    </div>
  );
}
