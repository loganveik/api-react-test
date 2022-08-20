import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [poke, setPoke] = useState({
    id: "",
    name: "",
    img: "",
    type: "",
    ability: "",
    height: "",
    weight: ""
  });
  const [search, setSearch] = useState("");
  const [isSelected, setIsSelected] = useState(false)

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        console.log(response.data);
        setPoke({
          id: response.data.id,
          name: response.data.name,
          img: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
          ability: response.data.abilities[0].ability.name,
          height: response.data.height,
          weight: response.data.weight
        });
        setIsSelected(true);
        setSearch("");
      })
  }
  return (
    <>
      <Navbar Link={Link} />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <Search
              onChange={(event) => { setSearch(event.target.value) }}
              onClick={searchPokemon}
              value={search}
              isSelected={isSelected}
              poke={poke}
            />}
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

    </>
  )
}

export default App;
