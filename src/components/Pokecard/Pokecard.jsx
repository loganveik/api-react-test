import './Pokecard.css';
import React from 'react';

export default function Pokecard({ item, onClick, iconClass }) {
    return (
        <>
            <div className="pokecard-container">
                <div className="pokecard">
                    <div className="front">
                        <div className="poke-img">
                            <img src={item.sprites.front_shiny} alt={item.name} />
                        </div>
                        <div className="poke-info">
                            <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-info">
                            <p className="stats-text">STATS</p>
                            <div className="back-stats">
                                <div className="stat-item">
                                    <i className="fa-solid fa-hand-fist"></i>
                                    <p>{item.types[0].type.name}</p>
                                </div>
                                <div className="stat-item">
                                    <i className="fa-solid fa-wand-sparkles"></i>
                                    <p>{item.abilities[0].ability.name}</p>
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
                                <i id="icon" onClick={onClick} className={iconClass}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
