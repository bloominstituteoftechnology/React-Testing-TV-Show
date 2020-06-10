import React, { useState, useEffect } from "react"
import axios from "axios"
import Dropdown from "react-dropdown"
import parse from "html-react-parser"
import { fetchShow } from './utils/formatSeasons'
import { formatSeasons } from "./utils/formatSeasons"

import Episodes from "./components/Episodes"
import "./styles.css"

export default function App() {
  const [show, setShow] = useState(null)
  const [seasons, setSeasons] = useState([])
  const [selectedSeason, setSelectedSeason] = useState("")
  const episodes = seasons[selectedSeason] || []
  useEffect(() => {
    fetchShow()
      .then(res => {
        setShow(res.data)
        setSeasons(formatSeasons(res.data._embedded.episodes))
      })
  }, [])

  const handleSelect = e => {
    console.log('handleSelect', e.target.value)
    setSelectedSeason(e.target.value)
  }

  if (!show) {
    return <h2 data-testid="h2">Fetching data...</h2>
  }
  return (
    <div className="App" data-testid="app">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      {/* <Dropdown
        data-testid='dropdown'
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
      /> */}
      <select name="episodes" onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option" data-testid="select"
      >
        <option value="none">Select an Option</option>
        <option data-testid="season1" value={seasons[0]}>Season 1</option>
        <option value={seasons[1]}>Season 2</option>
        <option value={seasons[2]}>Season 3</option>
        <option value={seasons[3]}>Season 4</option>
      </select>
      <Episodes episodes={episodes} />
    </div>
  )
}