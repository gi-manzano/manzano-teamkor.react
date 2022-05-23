import React, { useEffect, useState, } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import IndumentariaCard from './IndumentariaCard'
 
const Indumentaria = () => {

    const [indumentaria, setIndumentaria] = useState([])
    const [indumentariaOferta, setIndumentariaOferta] = useState([])

    useEffect(() => {
        getIndumentaria ()
        getIndumentariaOferta ()
      
    }, [])
    
    //Lista de indumentaria
    const getIndumentaria = ( ) => { 
      const db = getFirestore ()
      const IndumentariaColection = collection (db, 'items')
      getDocs (IndumentariaColection).then (snapshot => {
          if (snapshot.size > 0 ) {
              console.log (snapshot.docs);
              const ids = snapshot.docs.map (docs => docs.id).join(',')
              console.log ('ids: ', ids);


              const indumentariaData = snapshot.docs.map ( docs => ({'id': docs.id, ...docs.data() } ) )
            console.log (indumentariaData);
            setIndumentaria(indumentariaData);
            }
      })
    }

    //indumentaria ofertas
    const getIndumentariaOferta =  async ( ) => { 
      const db = getFirestore ()
      const IndumentariaColection = collection (db, 'items')
      const q = query (IndumentariaColection, where ('precio', '<', 900))
      const snapshot = await getDocs ( q ) 

        if (snapshot.size > 0 ) {
          const indumentariaData = snapshot.docs.map ( docs => ({'id': docs.id, ...docs.data() } ) )
          setIndumentariaOferta(indumentariaData);
          }
     }

  return (
  <>
    <div>Indumentaria </div>
    {indumentaria.map( indumentaria => <IndumentariaCard key={indumentaria.id} item={indumentaria}/>)}
    <div className='card bg-sky-800'>Indumentaria de Oferta
    {indumentariaOferta.map (indumentaria => <li key={indumentaria.id}> {indumentaria.titulo} {indumentaria.precio} </li>)} </div>
  </>
  )
}

export default Indumentaria