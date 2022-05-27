import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../data/itemData'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [products, setProducts] = useState ([]) 
    const { id } = useParams ()

    useEffect(() => {
        if (id === undefined){
            getItem().then((resp) => setProducts(resp))
        } else {
            getItem().then((resp) => setProducts(resp[id]))
        } 
    }, [id])
    
  return (
    <div>
        <ItemDetail producto={products} />
    </div>
  )
}

export default ItemDetailContainer