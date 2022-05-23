import React, { useContext } from 'react'
import { DarkModeContext } from '../context/darkModeContext'
import { Link } from 'react-router-dom';



const Home = () => {
 
  const darkMode = useContext (DarkModeContext)
  
  return (
    
    <div>
    <div className="hero min-h-screen" >
  <div className="hero-overlay bg-opacity-60">
    <figure><img src="/fotos/sporty.jpg" alt=""></img></figure>
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bienvenidos!!!</h1>
      <Link className="btn btn-primary" to="/clothes" >Get Started</Link>
    </div>
  </div>
    </div>
    <strong >
          { darkMode ? 'Modo: activado' :
          'Modo: desactivado'}
        </strong>
    </div>
  )
}

export default Home;