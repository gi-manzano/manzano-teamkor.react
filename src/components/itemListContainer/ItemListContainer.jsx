import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import Indumentaria from '../Store/Indumentaria'

const ItemListContainer = ( {greetin} ) => {
  const darkMode = useContext (DarkModeContext)
  return (
  <div className={ darkMode ? 'bg-black text-white' : ' bg-white text-black'}>
    <div>
    <Indumentaria/>
    </div>
    <strong >
      { darkMode ? 'Modo: activado' :
      'Modo: desactivado'}
    </strong>
  </div>
  )
}

export default ItemListContainer

