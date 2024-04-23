import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { Outlet } from 'react-router-dom'
import Spinner from './Spinner'

function ProtectedRoute() {
  let [ok,setOk]=useState(false)
  let [auth,setAuth]=useAuth()

  async function isUserValid(){
    let data=await auth
    if(data.ok){
      setOk(auth.ok)
    }
  }
  useEffect(()=>{
    isUserValid()
  },[ok])
  return (
    ok?<Outlet/>:<Spinner/>
  )
}

export default ProtectedRoute