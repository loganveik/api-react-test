import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

function App() {

  const [poke, setPoke] = useState([]);
  const [favoritePokeList, setFavoritePokeList] = useState([]);
  const [search, setSearch] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        setPoke([response.data]);
        setSearch("");
      })
  }

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorite-pokemon-list", JSON.stringify(items));
  }

  const addToFavorites = (poke) => {
    const newList = [poke, ...favoritePokeList];
    setFavoritePokeList(newList);
    saveToLocalStorage(newList);
  }

  const removeFromFavorites = (favPoke) => {
    const newList = favoritePokeList.filter((item) => item.id !== favPoke.id);
    setFavoritePokeList(newList);
    saveToLocalStorage(newList);
  }

  return (
    <>
      <Navbar Link={Link} />
      <AppContext.Provider value={{
        poke,
        setPoke,
        favoritePokeList,
        setFavoritePokeList,
        search,
        setSearch,
        searchPokemon,
        addToFavorites,
        removeFromFavorites
      }}>
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
