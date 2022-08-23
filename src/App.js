import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

function App() {

  const [poke, setPoke] = useState([]);
  const [favoritePokeList, setFavoritePokeList] = useState([]);
  const [search, setSearch] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const searchPokemon = () => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        setPoke([response.data]);
      })
      .catch(error => {
        const resMsg = error.response.data;
        if (resMsg === "Not Found") {
          setErrorMsg(`Sorry, ${search} is not a pokemon`);
        }
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = (e) => {
    if (search === "") {
      return
    }
    e.preventDefault();
    searchPokemon(search);
    setPoke([]);
    setSearch("");
    setErrorMsg("");
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
        handleSubmit,
        addToFavorites,
        removeFromFavorites,
        errorMsg,
        loading
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
