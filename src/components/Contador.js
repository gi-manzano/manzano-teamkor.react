import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Contador = () => { 

 const [suma, setSuma ] = useState(0)
 
 
 //*render 1 //hook
 useEffect (() => {
  console.log ('Efecto');
 })

 //*render 2 //hook
 useEffect (() => {
  console.log ('Efecto in mounting');
 }, [])

//*render 3 //hook
 useEffect (() => {
  console.log ('Efecto cambio en suma');
 }, [suma])

 

  const onClickHandler = ()=> {
    console.log ('click')
    setSuma (suma + 1)
  }


  

  return (
    <div>
     <button onClick={onClickHandler} className="btn btn-outline btn-primary">Click here!</button>
     {suma} 
    </div>
  )
}

export default Contador