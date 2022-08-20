import './Pokecard.css';
import React from 'react'

export default function Pokecard({ name, img, id, type, ability, height, weight }) {
    return (
        <div key={id} className="pokecard-container">
            <div className="pokecard">
                <div className="front">
                    <div className="poke-img">
                        <img src={img} alt={name} />
                    </div>
                    <div className="poke-info">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="back">
                    <p>Type: {type}</p>
                    <p>Ability: {ability}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <i id="star-icon" class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    )
}
