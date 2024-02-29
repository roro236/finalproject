import React, { useEffect } from 'react';
import Navbar from './../Navbar/Navbar' ;
import {Outlet} from 'react-router-dom' ;
import { useContext } from 'react';
import { userContext } from '../../context/TokenContext';



export default function Layout() {
  let {setToken}=useContext(userContext)
  useEffect(()=>{
    if (localStorage.getItem('userToken')!==null){
      setToken(localStorage.getItem('userToken'))
    }

  },[])
  return(
    <div>
<Navbar/>
<div className="container">
<Outlet/>
</div>
<footer/>

    </div>
  )

}
