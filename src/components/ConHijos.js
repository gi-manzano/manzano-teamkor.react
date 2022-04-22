import React from 'react'

const ConHijos = ({children}) => {
  return (
    <>
    <div style={{border:'solid pink 2px', margin:'20px'}}>
    <div>Bienvenidos a una nueva forma de entrenamiento</div>
    {children}
    </div>
    </>
  )
}

export default ConHijos