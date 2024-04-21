import React, { useState, useEffect } from 'react';
import PokeCell from '../PokeCell';
import './PokeList.css';

const PokeList = ({ handleOnClick }) => {
    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const pokemonList = data.results.map(item => ({
                    id: item.url.split('/').filter(Boolean).pop(), // Extracting ID from the URL
                    name: item.name
                }));
                setPokemon(pokemonList);
            } catch (error) {
                setError('Failed to fetch data');
                console.error('There was an error!', error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [offset]);

    const handleNextClick = () => {
        setOffset(prevOffset => prevOffset + 50);
    };

    const handlePreviousClick = () => {
        if (offset >= 50) {
            setOffset(prevOffset => prevOffset - 50);
        }
    };

    return (
        <section className="poke-list">
            {isLoading ? <p>Loading...</p> : error ? <p>{error}</p> : pokemon.map(poke => (
                <PokeCell key={poke.id} pokeClass={poke.id} handleOnClick={handleOnClick} />
            ))}
            <button onClick={handlePreviousClick} disabled={offset === 0}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </section>
    );
};

export default PokeList;
