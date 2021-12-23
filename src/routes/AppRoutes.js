import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link,} from 'react-router-dom';
import Detail from '../components/Detail';
import Login from '../components/Login';
import PokemonCard from '../components/PokemonCard';
import Register from '../components/Register';
import Search from '../components/Search';
import { faHome, faRegistered, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <div className="w-full flex flex-col justify-center items-center">
                    <img className="w-96" src="https://1000marcas.net/wp-content/uploads/2020/01/Pok%C3%A9mon.jpg" alt="" />
                    <div className="w-full flex flex-row justify-center ">
                        <Link to="/"><FontAwesomeIcon className="text-3xl text-black m-2" icon={faHome} /></Link>
                        <Link to="/login"><FontAwesomeIcon className="text-3xl text-black m-2" icon={faUserCircle} /></Link>
                        <Link to="/register"><FontAwesomeIcon className="text-3xl text-black m-2" icon={faRegistered} /></Link>
                        
                    </div>
                    <Search />
                </div>
                    <Routes>
                        <Route exact path="/" element={<PokemonCard />} />
                        <Route exact path="/detail/:id" element={<Detail />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                    </Routes>
            </Router>
        </>
    )
}