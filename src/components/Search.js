import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Search = () => {

    const {pokemones} = useSelector(state => state.pokemones)

    const [search, setSearch] = useState("")
    
    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

  
        
    
    
    return (
        <>
            <form onSubmit={(e => handleChange(e))} className="w-full flex flex-row items-center justify-center pb-10">
                <input onChange={(e) => handleChange(e)} className="w-max px-4 py-2 bg-gray-200 rounded-sm" placeholder="Buscar pokemon..." type="text" name="name" />
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Buscar
                </button>
            </form>
        </>
    )
}

export default Search
