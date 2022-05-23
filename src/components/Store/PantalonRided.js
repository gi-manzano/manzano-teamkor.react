import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const PantalonRided = () => {

   const [indumentaria, setindumentaria] = useState({})
    
    

    useEffect(() => {
        getPantalonRider ()
    }, [])
    
    const getPantalonRider= () => {
    const db = getFirestore ()
    const indumentariaDoc = doc(db, 'items', 'qbbakNstazHRBHLC5CyP' ) 
    getDoc (indumentariaDoc ).then ( result => {
        if (result.exists()) {
            console.log(result);
            console.log('id',result.id);
            console.log('data',result.data());
            setindumentaria ({'id': result.id , ...result.data()} )
        }
    })
    }
    

  return (
    <div>
        <div>{indumentaria.titulo}  </div>
        <div>{indumentaria.tipo}  </div>
        <div>Precio:$ {indumentaria.precio}  </div>
        <div>Stock:{indumentaria.stock} </div>
    </div>
  )
}

export default PantalonRided