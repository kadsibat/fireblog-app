import React from 'react'
import FormBlok from '../components/FormBlok'
import {useContext} from "react"
import AppContext from '../contexts/AppContext';
import { useFetch } from '../helpers/function';


const Dashboard = () => {
  const {user} =useContext(AppContext);
  const {databaseBlog} =useFetch()
  console.log(databaseBlog);
  return (
    <div>
       <h1 style={{fontFamily:"cursive"}}>─── DASHBOARD ─── </h1>
       
    
      <FormBlok databaseBlog={databaseBlog}/>
    </div>
  )
}

export default Dashboard
