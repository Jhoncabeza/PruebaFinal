import { types } from "../types/types";
let url = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=100"


export const pokemonAsync = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            data.results.forEach(async (element) => {
                const elementData = await fetch(element.url)
                const responseData = await elementData.json();
                const pokemon = {
                    id: responseData.id,
                    img: responseData.sprites.other.dream_world.front_default,
                    nombre: responseData.name,
                    types: responseData.types,
                    height: responseData.height,
                    weight: responseData.weight,
                    abilities: responseData.abilities,
                }
                dispatch(pokemonSync(pokemon))
            })

        }
        catch (err) {
            console.log(err)
        }
    }
}


export const pokemonSync = (pokemon) => {
    return {
        type: types.mostrarData,
        payload: pokemon
    }
}

