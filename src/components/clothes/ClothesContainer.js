import React from 'react'
import { useEffect, useState } from 'react'
import { clothesData } from '../../data/clothesData'
import ClothesCard from './ClothesCard'



const ClothesContainer = () => {
    

    const [clothes, setclothes] = useState([]);
    
    const [loading, setLoading] = useState (true)

    
    useEffect(() => {

        getClothes().then ( data => {
            setLoading (false)
            setclothes ( data )

        });

    }, [])

    const getClothes = () => { 
        return new Promise ((resolve, reject) => {
            
            setTimeout (() => {
                resolve(clothesData)

            }, 3000);
            
            console.log (clothesData);

        }) 
    }
    


  return (
      
    <section>

        { loading ? <p>Cargando productos...</p>
        :
        clothes.map ( clothes => 
                    <ClothesCard 
                    key={clothes.id} 
                    data={clothes} />)
        }

    </section>
  )
}

export default ClothesContainer