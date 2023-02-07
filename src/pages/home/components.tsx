import styled from "styled-components";

export const Container = styled.div`
    
    h1 {
        text-align: center;
        margin: 4rem 0; 
    }

`
export const PokeList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`
export const Pokemon = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`