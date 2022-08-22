import './Pokecard.css';
import React from 'react';

export default function Pokecard({ item, onClick, iconClass }) {
    return (
        <>
            <div className="pokecard-container">
                <div className="pokecard">
                    <div className="front">
                        <div className="poke-img">
                            <img src={item.sprites.front_default} alt={item.name} />
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
                                    <i className="fa-solid fa-heart"></i>
                                    <p>{item.stats[0].base_stat + " hp"}</p>
                                </div>
                                <div className="stat-item">
                                    <i className="fa-solid fa-ruler-combined"></i>
                                    <p>{Math.floor(item.height / 10 * 39.370 / 12) + " ft"}</p>
                                </div>
                                <div className="stat-item">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                    <p>{Math.round(item.weight / 10 * 2.2046) + " lbs"}</p>
                                </div>
                                <div className="stat-item">
                                    <i className="fa-solid fa-mars-and-venus-burst"></i>
                                    <p>{item.types[0].type.name.charAt(0).toUpperCase() + item.types[0].type.name.slice(1)}</p>
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
