import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { pokemonAsync } from '../actions/actionData'
let url = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=100"

const PokemonCard = () => {
    const { pokemones } = useSelector(state => state.pokemones)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(pokemonAsync(url))
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className="bg-gradient-to-t from-[#94DAFF] to-[#F5F5F5] w-full h-auto flex flex-wrap justify-center items-center">
                {
                    pokemones.map((pokemon, index) => (
                        <Link key={index} to={`/detail/${pokemon.id}`}>
                            <div className=" border-solid border-2 border-black rounded-3xl bg-gradient-to-t from-[#1E1B32] to-white w-72 h-auto m-4 flex flex-col items-center" >
                                <div className="mt-3">
                                    <div className="rounded-t-full w-64 h-32 bg-red-600 border-8 border-black">
                                        <img className="w-64 h-20 mt-1" src={pokemon.img} alt='pokemon' />
                                    </div>
                                    <div className="rounded-full w-64 h-2 bg-black flex items-center justify-center absolute">
                                        <div className="w-16 h-16 bg-white rounded-full border-solid border-8 border-black flex items-center justify-center">
                                            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center"></div>
                                        </div>
                                    </div>
                                    <div className="rounded-b-full  w-64 h-32 bg-white border-8 border-black ">
                                        <h1 className="text-xl text-center font-mono font-bold mt-7 ">#{pokemon.id}</h1>
                                        <h1 className="text-xl text-center font-mono font-bold uppercase ">{pokemon.nombre}</h1>
                                    </div>
                                    <div className="w-64 h-32 flex flex-col items-center justify-center">
                                        <>

                                            {
                                                pokemon.types.map(type => (
                                                    <div key={type.slot}>
                                                        <h1 className="text-xl text-center font-mono font-bold text-white uppercase "> Tipo: {type.type.name}</h1>
                                                    </div>
                                                ))}
                                        </>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default PokemonCard
