import React, { useState, useEffect } from 'react';
import pokeCards from "../PokeCards/PokeCards.css";
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        getPokemons();
    },[page])


    const getPokemons = async () => {

        const limit = 12;
        const offset = page * limit

        setLoading(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        setPokemonList(response.data.results);
        setLoading(false);
    }

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
                <div>
                    <div className="card-place">
                        {pokemonDetails.map(pokemon => (
                            <div className="poke-cards" key={pokemon.id}>
                                <img className="gif" src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <div className="title-pokecards">{pokemon.name}</div>
                                <div className="container-order" style={{justifyContent: "center"}}>
                                    {pokemon.types.map((type)=> (
                                        <li className="attribute" key={type.type.name} >{type.type.name}</li>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {<button onClick={() => setPage((prevState) => Math.max(prevState-1,0))}>Previous</button>}
                        {<button onClick={() => setPage((prevState) => prevState+1)}>Next</button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokemonList;
