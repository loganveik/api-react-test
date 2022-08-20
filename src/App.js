import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

function App() {
  const [poke, setPoke] = useState({
    id: "",
    name: "",
    img: "",
    type: "",
    ability: "",
    height: "",
    weight: "",
    isFavorited: false
  });
  const [favoritePokeList, setFavoritePokeList] = useState([]);
  const [search, setSearch] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  // const [isFavorited, setIsFavorited] = useState(false);
  // keeping above isFav state just in case new was implodes. if it does, i wIll have to go back to Pokecard.jsx and reenter isFav as well as below in provider

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      // .catch(function (error) {
      //   const err = JSON.stringify(error.name)
      //   console.log(err);
      // })
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
  // ABOVE CODE...try catching error the way i did on marvel app! dont use .then etc, use async - await on 22/23 and store axios.get in varioable. Again, like i did w marvel code.

  return (
    <>
      <Navbar Link={Link} />
      <AppContext.Provider value={{ poke, setPoke, search, setSearch, isSelected, setIsSelected, searchPokemon, favoritePokeList, setFavoritePokeList }}>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App;
