import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../data/clothesData'
import ClothesDetail from './ClothesDetail'

const ClothesDetailContainer = () => {
    const [products, setProducts] = useState ({}) 
    const { id } = useParams ()

    useEffect(() => {
        if (id === undefined){
            getItem().then((resp) => setProducts(resp))
        } else {
            getItem().then((resp) => setProducts(resp[id]))
        } 
    }, [id])
    
  return (
    <div className="container mx-auto my-8 max-w-4xl h-screen">
        <ClothesDetail producto={products} />
    </div>
  )
}

export default ClothesDetailContainer