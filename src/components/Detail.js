import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pokemonAsync } from '../actions/actionData'



const Detail = () => {
    const { pokemones } = useSelector(store => store.pokemones);
    const dispatch = useDispatch();
    const paramsName = useParams()
    const idProduct = paramsName

    useEffect(() => {
        dispatch(pokemonAsync())

        // eslint-disable-next-line
    }, [])

    let product = pokemones.find(pokemon => pokemon.id == idProduct.id)


    return (
        <div className="flex items-center justify-center">
            <div className=" border-solid border-2 border-black rounded-3xl bg-gradient-to-t from-[#1E1B32] to-white w-72 h-auto m-4 flex flex-col items-center" >
                <div className="mt-3">
                    <div className="rounded-t-full w-64 h-32 bg-red-600 border-8 border-black">
                        <img className="w-64 h-20 mt-1" src={product.img} alt='pokemon' />
                    </div>
                    <div className="rounded-full w-64 h-2 bg-black flex items-center justify-center absolute">
                        <div className="w-16 h-16 bg-white rounded-full border-solid border-8 border-black flex items-center justify-center">
                            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center"></div>
                        </div>
                    </div>
                    <div className="rounded-b-full  w-64 h-32 bg-white border-8 border-black ">
                        <h1 className="text-xl text-center font-mono font-bold mt-7 ">#{product.id}</h1>
                        <h1 className="text-xl text-center font-mono font-bold uppercase ">{product.nombre}</h1>
                    </div>
                    <div className="w-64 h-16 flex flex-col items-center justify-center">
                        <>

                            {
                                product.types.map(type => (
                                    <div key={type.slot}>
                                        <h1 className="text-xl text-center font-mono font-bold text-white uppercase "> Tipo: {type.type.name}</h1>

                                    </div>
                                ))}
                        </>
                    </div>
                    <h1 className="text-xl text-center font-mono font-bold text-white uppercase "> Altura: {product.height} m</h1>
                    <h1 className="text-xl text-center font-mono font-bold text-white uppercase "> Peso: {product.weight} kg</h1>
                    <div className="w-64 h-auto flex flex-col items-center justify-center">
                        <>

                            {
                                product.abilities.map((ability) => (
                                    <div key={ability.ability.slot}>
                                        <h1 className="text-xl text-center font-mono font-bold text-white uppercase "> Tipo: {ability.ability.name}</h1>

                                    </div>
                                ))}
                        </>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detail

