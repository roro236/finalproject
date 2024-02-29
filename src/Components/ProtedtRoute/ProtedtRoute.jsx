import React from 'react'
import {Navigate} from 'react-router-dom';
export default function ProtedtRoute(myprops) {
  if (localStorage.getItem('userToken')!==null){
     return myprops.children;
  }else{
    return< Navigate to="/Login" />
  }

}

