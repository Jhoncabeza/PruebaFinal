import React from 'react'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    // const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         console.log(userCredential)
    //     })
    //   .catch((error) => {
    //    console.log(error)
    //   });
    return (
        <form>
            <div className="flex items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-black text-white font-bold py-2 px-4 rounded  hover:text-black hover:bg-white hover:border-black border-white border-4" type="submit">
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
