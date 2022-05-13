import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { clothesData } from '../../data/clothesData'
import ClothesCard from './ClothesCard'



const ClothesContainer = () => {

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
                resolve(clothesData)

            }, 2000);
            
            console.log (clothesData);

        }) 
    }
    


return (

    <section>
    <div className={ darkMode ? 'bg-black text-white' : 'bg-white text-black'}>

        <strong>{ darkMode ? 'Modo: activado' : 'Modo: desactivado'}</strong>

        { loading ? <p className='text-black'> Cargando productos...</p>
        :
        clothes.map ( clothes => <ClothesCard key={clothes.id} data={clothes} />)
        }
        
    </div>
    </section>


)
}

export default ClothesContainer