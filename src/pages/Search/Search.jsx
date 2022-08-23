import './Search.css';
import Pokecard from '../../components/Pokecard/Pokecard';
import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { SpinnerCircularFixed } from 'spinners-react';

export default function Search() {
    const { search, setSearch, handleSubmit, favoritePokeList, poke, addToFavorites, removeFromFavorites, errorMsg, loading } = useContext(AppContext);

    const favPokeIdArr = favoritePokeList.map(item => item.id);
    const pokeIdArr = poke.map(item => item.id);
    const compare = favPokeIdArr.filter(item => pokeIdArr.includes(item));

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
                    onClick={handleSubmit}
                >
                    <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>
            <div className="card-container">
                {loading
                    ?
                    <SpinnerCircularFixed color="#ffffff" secondaryColor="00ffffff" speed={250} thickness={150} />
                    :
                    errorMsg === ""
                        ?
                        poke.map((item, index) => (
                            <Pokecard
                                key={index}
                                item={item}
                                onClick={compare.length > 0 ? () => removeFromFavorites(item) : () => addToFavorites(item)}
                                iconClass={compare.length > 0 ? "check fa-solid fa-check" : "star fa-solid fa-star"}
                            />
                        ))
                        :
                        <p>{errorMsg}</p>
                }
            </div>
        </>
    )
}
