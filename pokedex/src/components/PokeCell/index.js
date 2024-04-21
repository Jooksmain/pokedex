import React from 'react';
import './PokeCell.css';

const PokeCell = ({ pokeClass, handleOnClick }) => {
    return (
        <button onClick={() => handleOnClick(pokeClass)} className="poke-cell">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass}.png`} alt={`Pokemon ${pokeClass}`} />
        </button>
    );
}

export default PokeCell;