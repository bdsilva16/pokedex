import React, { useState,useEffect } from "react";

import { Container, PokeList, Pokemon } from "./components";

export default function Home(){

    const [pokemons, setPokemons] = useState<any[]>([])
    
    useEffect(() => {
        fetch (`https://pokeapi.co/api/v2/pokemon`)
            .then(response => response.json())
            .then(info => setPokemons(info.results))
        },[])

    return(
        <Container>
            <h1>Pokedex</h1>
            <PokeList>
                {
                    pokemons.map(pokemon => {  
                        const pokemon_id=pokemon.url.split('/') 
                        return(
                           <Pokemon>      
                            <a href="#"><img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon_id[6]}.svg`} alt={pokemon.name}/></a>
                                <span>{pokemon.name}</span>
                            </Pokemon> 
                        )
                    })
                }
            </PokeList>                    
        </Container>
    );
}