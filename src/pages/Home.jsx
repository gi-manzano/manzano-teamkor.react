import React from 'react'
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there!!!</h1>
      <p className="mb-5">Bienvenidos a la tienda de indumentaria depostiva que se adapta a cada estilo</p>
      <Link className="btn btn-primary" to="/clothes" >Get Started</Link>
    </div>
  </div>
</div>
   
  )
}

export default Home;