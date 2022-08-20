import './PokecardFav.css';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

export default function PokecardFav({item}) {
    const { poke, setPoke, favoritePokeList, setFavoritePokeList } = useContext(AppContext);

    const removeFromFavorites = () => {
        setPoke({ ...poke, isFavorited: false });
    };

    return (
        <div className="pokecard-container">
            <div className="pokecard">
                <div className="front">
                    <div className="poke-img">
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className="poke-info">
                        <p>{item.name}</p>
                    </div>
                </div>
                <div className="back">
                    <div className="back-info">
                        <p className="stats-text">STATS</p>
                        <div className="back-stats">
                            <div className="stat-item">
                                <i className="fa-solid fa-hand-fist"></i>
                                <p>{item.type}</p>
                            </div>
                            <div className="stat-item">
                                <i className="fa-solid fa-wand-sparkles"></i>
                                <p>{item.ability}</p>
                            </div>
                            <div className="stat-item">
                                <i className="fa-solid fa-ruler-combined"></i>
                                <p>{item.height}</p>
                            </div>
                            <div className="stat-item">
                                <i className="fa-solid fa-scale-balanced"></i>
                                <p>{item.weight}</p>
                            </div>
                        </div>
                        <div className="favBtn">
                            {poke.isFavorited
                                ?
                                <i id="icon" onClick={() => removeFromFavorites()} className="check fa-solid fa-check"></i>
                                :
                                <i id="icon" onClick={() => console.log("nothing")} className="star fa-solid fa-star"></i>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
