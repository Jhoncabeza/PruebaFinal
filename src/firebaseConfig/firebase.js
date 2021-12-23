
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXjj-D7ZyVdeRNATG4pLbdgJjkkfWTdYI",
  authDomain: "pokeauth-639e9.firebaseapp.com",
  projectId: "pokeauth-639e9",
  storageBucket: "pokeauth-639e9.appspot.com",
  messagingSenderId: "131133009537",
  appId: "1:131133009537:web:df5f8bb610db88e344a780"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
