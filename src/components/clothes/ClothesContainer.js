import React from 'react'
import { useEffect, useState } from 'react'
import { clothesData } from '../../data/clothesData'
import ClothesCard from './ClothesCard'



const ClothesContainer = () => {

    const [clothes, setclothes] = useState([])
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

        })
    }
    


  return (
    <div>
        { loading ?
            <h1>Loading...</h1>

        :

         clothes.map ( c => <ClothesCard key={c.id} data={c} />)
        
        }

    </div>
  )
}

export default ClothesContainer