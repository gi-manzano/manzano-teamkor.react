import React, { useContext } from 'react'
import { DarkModeContext } from '../context/darkModeContext'
import { Link } from 'react-router-dom';



const Home = () => {
 
  const darkMode = useContext (DarkModeContext)
  
  
  return (
    
  <div className={ darkMode ? 'bg-black text-white' : 'bg-white text-magenta'}>
  <strong>{ darkMode ? 'Modo: On' : 'Modo: Off'}</strong>
    <div className="hero min-h-screen" >
      <div className="hero-overlay bg-opacity-60 bg-pink-800">
        <img src="/fotos/sporty.jpg" alt="Hero"></img></div>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Bienvenidos!!!</h1>
          <p className='text-white'>Indumetaria depostiva para cada momento</p> <br/>
          <Link className="btn btn-primary" to="/clothes" >Store</Link></div>
      </div>
    </div> <strong > { darkMode ? 'Modo: On' :'Modo: Off'}</strong>
  </div>
  )
}

export default Home;