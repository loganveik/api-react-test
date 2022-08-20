import './Search.css';
import Pokecard from '../../components/Pokecard/Pokecard';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

export default function Search() {
    const { isSelected, search, setSearch, searchPokemon, favoritePokeList, poke } = useContext(AppContext);

    return (
        <>
            <section className="search-wrap">
                <input
                    className="search-input"
                    placeholder="Search PokeAPI"
                    onChange={(event) => { setSearch(event.target.value) }}
                    type="search"
                    value={search}
                />
                <button
                    className="search-button"
                    type="submit"
                    onClick={searchPokemon}
                >
                    <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>
            <div className="card-container">
                {!isSelected
                    ?
                    <p>Please Choose a Pokemon</p>
                    :
                    <Pokecard />
                }
            </div>
        </>
    )
}
