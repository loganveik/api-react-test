import './Pokecard.css';
import React, { useContext } from 'react';
import { AppContext } from '../../App';

export default function Pokecard() {
    const { poke, setPoke, favoritePokeList, setFavoritePokeList } = useContext(AppContext);

    const addToFavorites = () => {
        setPoke({ ...poke, isFavorited: true });
        setFavoritePokeList(favoritePokeList.concat(poke));
    };

    const removeFromFavorites = (id) => {
        setPoke({ ...poke, isFavorited: false });
        const newArr = favoritePokeList.filter((item) => item.id !== id);
        setFavoritePokeList(newArr);
    };

    return (
        <div className="pokecard-container" key={poke.id}>
            <div className="pokecard">
                <div className="front">
                    <div className="poke-img">
                        <img src={poke.img} alt={poke.name} />
                    </div>
                    <div className="poke-info">
                        <p>{poke.name}</p>
                    </div>
                </div>
                <div className="back">
                    <div className="back-info">
                        <p className="stats-text">STATS</p>
                        <div className="back-stats">
                            <div className="stat-item">
                                <i className="fa-solid fa-hand-fist"></i>
                                <p>{poke.type}</p>
                            </div>
                            <div className="stat-item">
                                <i className="fa-solid fa-wand-sparkles"></i>
                                <p>{poke.ability}</p>
                            </div>
                            <div className="stat-item">
                                <i className="fa-solid fa-ruler-combined"></i>
                                <p>{poke.height}</p>
                            </div>
                            <div className="stat-item">
                                <i className="fa-solid fa-scale-balanced"></i>
                                <p>{poke.weight}</p>
                            </div>
                        </div>
                        <div className="favBtn">
                            {poke.isFavorited
                                ?
                                <i id="icon" onClick={() => removeFromFavorites()} className="check fa-solid fa-check"></i>
                                :
                                <i id="icon" onClick={() => addToFavorites()} className="star fa-solid fa-star"></i>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
