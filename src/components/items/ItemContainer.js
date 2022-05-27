import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { itemData } from '../../data/itemData'
import ItemCard from './ItemCard'


const ItemContainer = () => {

    const darkMode = useContext (DarkModeContext)
    const [clothes, setclothes] = useState([]);
    const [loading, setLoading] = useState ([true])

    
    useEffect(() => {
        getClothes().then ( data => {
            setLoading (false)
            setclothes ( data )
        });
    }, [])
    const getClothes = () => { 
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
            resolve(itemData)
            }, 2000);
        }) 
    } 
    
    if (loading) {
        return <button className="btn loading items-center">Caragando Producto</button>
        
    }

return (

    <section>
    <div className={ darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
        <strong>{ darkMode ? 'Modo: On' : 'Modo: Off'}</strong>
        {(clothes.map ( clothes => <ItemCard key={clothes.id} data={clothes} />))}   
    </div>
    </section>

)
}

export default ItemContainer