import { createContext, useContext, useEffect, useState} from "react";

let authContext=createContext()
export function AuthContext({children}){


    
    // this is for getItem from the localStorage
    function getItem(){
        return localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):null
    }
    let [auth,setAuth]=useState(getItem)
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(auth))

    },[auth])
    return <authContext.Provider value={{auth,setAuth}}>{children}</authContext.Provider>

}

// custom hook consuming for auth
export let useAuth=()=>{
    let {auth,setAuth}=useContext(authContext)
    return [auth, setAuth]
}