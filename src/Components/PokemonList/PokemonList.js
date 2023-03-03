import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=12&offset30');
    const [nextPageUrl, setNextPageUrl] = useState('');
    const [prevPageUrl, setPrevPageUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(currentPageUrl).then(response => {
            setLoading(false);
            setNextPageUrl(response.data.next);
            setPrevPageUrl(response.data.previous);
            setPokemonList(response.data.results);
        });
    }, [currentPageUrl]);

    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        setLoading(true);
        Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)))
            .then(responses => {
                setLoading(false);
                const pokemonDetails = responses.map(response => response.data);
                setPokemonDetails(pokemonDetails);
            })
            .catch(error => console.log(error));
    }, [pokemonList]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div>
                        {pokemonDetails.map(pokemon => (
                            <div key={pokemon.id}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <h3>{pokemon.name}</h3>
                                <p>Types:</p>
                                <ul>
                                    {pokemon.types.map(type => (
                                        <li key={type.type.name}>{type.type.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="agination-buttons">
                        {prevPageUrl && <button onClick={() => setCurrentPageUrl(prevPageUrl)}>Previous</button>}
                        {nextPageUrl && <button onClick={() => setCurrentPageUrl(nextPageUrl)}>Next</button>}
                    </div>
                </>
            )}
        </div>
    );
};

export default PokemonList;
