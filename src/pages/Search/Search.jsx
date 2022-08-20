import './Search.css';
import React from 'react';
import Pokecard from '../../components/Pokecard/Pokecard';

export default function Search({ onChange, onClick, value, isSelected, poke }) {
    return (
        <>
            <section className="search-wrap">
                <input
                    className="search-input"
                    placeholder="Search PokeAPI"
                    onChange={onChange}
                    type="search"
                    value={value}
                />
                <button
                    className="search-button"
                    type="submit"
                    onClick={onClick}
                >
                    <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>
            <div className="card-container">
                {!isSelected
                    ?
                    <p>Please Choose a Pokemon</p>
                    :
                    <Pokecard
                        id={poke.id}
                        name={poke.name}
                        img={poke.img}
                        type={poke.type}
                        ability={poke.ability}
                        height={poke.height}
                        weight={poke.weight}
                    />
                }
            </div>
        </>
    )
}
