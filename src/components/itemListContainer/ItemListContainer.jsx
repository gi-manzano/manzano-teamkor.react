import React from 'react'

const ItemListContainer = ( {greetin} ) => {
  return (
  <>
    <div className='text-black text-center bg-gradient-to-r from-fuchsia-300  text-2xl' style={{border:'solid sky 5px', margin:'20px', padding:'20x' }}>
    <p>La tienda virtual de indumentaria para la actividad que quieras hacer!!! {greetin}</p>
    
    </div>
  </>
  )
}

export default ItemListContainer

