import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function Navbar() {
    let [auth,setAuth]=useAuth()
    function LogoutHandler(){
      setAuth((pre)=>{
        return {...pre,ok:false}
      })
      
    }
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/input'>Todo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" >User : {auth.name}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to='/' onClick={LogoutHandler}>Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to='/login' onClick={LogoutHandler}>LogOut</Link>
        </li>
      </ul>
      <span className="navbar-text">
      </span>
    </div>
  </div>
</nav>

  )
}

export default Navbar