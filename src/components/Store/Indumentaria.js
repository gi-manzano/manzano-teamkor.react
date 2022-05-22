import React, { useEffect,  } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
 
const Indumentaria = () => {

    // const [indumentaria,setindumentaria] = useState([])

    useEffect(() => {
        getIndumentaria ()
      
    }, [])
    
    const getIndumentaria = ( ) => { 
      const db = getFirestore ()
      const IndumentariaColection = collection (db, 'items')
      getDocs (IndumentariaColection).then (snapshot => {
          if (snapshot.size > 0 ) {
              console.log (snapshot.docs);
              const ids = snapshot.docs.map (docs => docs.id).join(',')
              console.log ('ids: ', ids);


            //   const indumentariaData = snapshot.docs.map ( docs => {'id': docs.id, ...docs.data()})
          }
      })
    }
    



  return (
    <div>Indumentaria</div>
  )
}

export default Indumentaria