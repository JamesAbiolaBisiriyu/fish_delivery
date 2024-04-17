// import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import './App.css'




const App = () => {
  return (
    <>
    <div className="main-content">
      <NavBar/>  
      <section className="about-space">
         <Outlet/>       

      </section>
    </div>
    </>
  )
}

export default App