import React, { useState,useEffect } from "react";
import { POKEAPI_KEY } from "../../config/pokeApi_key";
import { Container, PokeList, Pokemon } from "./components";

export default function Home(){

    const [pokemons, setPokemons] = useState<any[]>([])

    useEffect(() => {
        fetch (`https://pokeapi.co/api/v2/${POKEAPI_KEY}`)
            .then(response => response.json())
            .then(info => setPokemons(info.pokemon))
        },[])

    return(
        <Container>
            <h1>Minha Pokedex</h1>
            <PokeList>
                {
                    pokemons.map(pokemon => {
                        return(
                           <Pokemon>
                                <a href="#"><img src={pokemon.poster_path} alt={pokemon.name}/></a>
                                <span>{pokemon.name}</span>
                
                            </Pokemon> 
                        )
                    })
                }
            </PokeList>                    
        </Container>
    );
}