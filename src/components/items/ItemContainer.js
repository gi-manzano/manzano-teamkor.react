import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { itemData } from '../../data/itemData'
import ItemCard from './ItemCard'

const ItemContainer = () => {

    const darkMode = useContext (DarkModeContext)
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
            resolve(itemData)
            }, 2000);
        }) 
    } 
    
    if (loading) {
        return <h1 className="text-3xl"> Cargando productos... </h1> 
    }

return (

    <section>
    <div className={ darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
        <strong>{ darkMode ? 'Modo: activado' : 'Modo: desactivado'}</strong>
        {(clothes.map ( clothes => <ItemCard key={clothes.id} data={clothes} />))}   
    </div>
    </section>

)
}

export default ItemContainer