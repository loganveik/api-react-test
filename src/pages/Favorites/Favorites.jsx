import Pokecard from '../../components/Pokecard/Pokecard';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import './Favorites.css';

export default function Favorites() {
    const { favoritePokeList, setFavoritePokeList, removeFromFavorites } = useContext(AppContext);

    useEffect(() => {
        const ls_poke_favorites = JSON.parse(localStorage.getItem("favorite-pokemon-list"));
        setFavoritePokeList(ls_poke_favorites);
    }, [])

    return (
        <div className="fav-container">
            {favoritePokeList.map((item, index) => (
                favoritePokeList.length === 0
                    ?
                    <p>Search pokemon to add to here!</p>
                    :
                    <Pokecard
                        key={index}
                        item={item}
                        onClick={() => removeFromFavorites(item)}
                        iconClass={"check fa-solid fa-check"}
                    />
            ))}
        </div>
    )
}
