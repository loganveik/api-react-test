import PokecardFav from '../../components/PokecardFav/PokecardFav';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import './Favorites.css';

export default function Favorites() {
    const { poke, favoritePokeList } = useContext(AppContext);

    return (
        <div className="fav-container">
            {favoritePokeList.length === 0 ? <p>Add a Pokemon to your favorites</p> : favoritePokeList.map(item => (<PokecardFav item={item} key={item.id} />))}
        </div>
    )
}
