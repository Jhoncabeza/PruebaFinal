import { types } from "../types/types";

const initialstate = {
    pokemones: []
}

export const reducerData = (state = initialstate, action) => {
    switch (action.type) {
        case types.mostrarData:
            return {
                pokemones: [...state.pokemones, action.payload]
            }
        
        default:
            return state;
    }
}