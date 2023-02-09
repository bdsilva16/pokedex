import React, { useState } from "react";
import { moveEmitHelpers } from "typescript";
import { Container, PokeList, Pokemon } from "./components";

export default function Home(){

    //const [pokemons, setPokemons] = useState<any[]>([])

    const pokemons = [
        {
            title:"new",
            poster_path:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
        }
    ]

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