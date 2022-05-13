import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const ItemListContainer = ( {greetin} ) => {

  const darkMode = useContext (DarkModeContext)

  return (

    
  <div className={ darkMode ? 'bg-black text-white' : ' bg-white text-black'}>
  
    <div className='text-black text-center bg-gradient-to-r from-fuchsia-300  text-2xl' style={{border:'solid sky 5px', margin:'20px', padding:'20x' }}>
    <p>La tienda virtual de indumentaria para la actividad que quieras hacer!!! {greetin}</p>
    
    </div>

    <strong>
      { darkMode ? 'Modo: activado' :
      'Modo: desactivado'}
    </strong>

    
  </div>
  )
}

export default ItemListContainer

