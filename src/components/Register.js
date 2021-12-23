import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig/firebase'


const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userRegister = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            });
        e.preventDefault()
        setPassword("")
        setEmail("")
    }

    
    return (
        <form>
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
                    <div className="">
                        <input onChange = {(e)=> setEmail(e.target.value)} value={email} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input onChange = {(e)=> setPassword(e.target.value)} value={password} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={userRegister} className="bg-black text-white font-bold py-2 px-4 rounded  hover:text-black hover:bg-white hover:border-black border-white border-4" type="submit">
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register
