import React, { useState,useEffect } from "react";
import { POKEAPI_KEY } from "../../config/pokeApi_key";
import { Container, PokeList, Pokemon } from "./components";

export default function Home(){

    const [pokemons, setPokemons] = useState<any[]>([])

    useEffect(() => {
        fetch (`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${POKEAPI_KEY}`)
            .then(response => response.json)
            .then(data => setPokemons(data.results))
        },[])

    return(
        <Container>
            <h1>Minha Pokedex</h1>
            <PokeList>
                {
                    pokemons.map(pokemon => {
                        return(
                           <Pokemon>
                                <a href="#"><img src={pokemon.poster_path} alt={pokemon.title}/></a>
                                <span>{pokemon.title}</span>
                
                            </Pokemon> 
                        )
                    })
                }
            </PokeList>                    
        </Container>
    );
}