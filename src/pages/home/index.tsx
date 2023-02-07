import React from "react";
import { Container, PokeList, Pokemon } from "./components";

export default function Home(){
    return(
        <Container>
            <h1>Minha Pokedex</h1>
            <PokeList>
                <Pokemon>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="new"/>
                    <span>new</span>
                </Pokemon>
            </PokeList>
            <PokeList>
                <Pokemon>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="new"/>
                    <span>new</span>
                </Pokemon>
            </PokeList>    
            <PokeList>
                <Pokemon>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt="new"/>
                    <span>new</span>
                </Pokemon>
            </PokeList>                    
        </Container>
    );
}