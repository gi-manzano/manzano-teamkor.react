import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { clothesData } from '../../data/clothesData'
 import ItemCount from '../../ItemCount/ItemCount'


const ClothesDetail = () => {

  
   const { clothesId } = useParams ()

   const [clothes, setclothes] = useState( {} )

useEffect (  () => {

  (async () => {
    const clothesData =  await getClothesDetail()
    if ( clothesData) {
      setclothes (clothesData)
    }
   
  }) ()
 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [clothesId])

const getClothesDetail = () => { 
   return new Promise ( (resolve) => {
      setTimeout(() => {
        resolve( clothesData.find( c => c.id == clothesId ) )
      }, 2000);
   } )
 };

 //* context agregar productos


 const [terminar, setTerminar] = useState(false)



 const onAdd = (count) => {
   setTerminar (true)
   console.log (count)
 }

  return (
    
  
  <div className='card-body'>
    <div className="card place-items-center w-96 ml-4 mt-6 mb-8 border-solid border-2 border-sky-500">
      <h2 className="card-title ml-4 text-black ">Detalle de producto!</h2>

      <div className="text-left ml-4 text-black ">
        <img className="h-15 " src= {clothes.img} alt={clothes.id}/> 
        <div>{clothes.name}</div>
        <div>{clothes.tipo}</div>
        <div>Stock: {clothes.stock}</div>
        <div>$ {clothes.precio}</div>
       
      </div>

          <div className='card-footer bg-teal-600 justify-center text-white'>  
            <h5> Variedad de talles.</h5>
            <h6> Envios a todo el país.</h6>
          </div>

      <button className="card-actions justify-center m-5 btn bg-indigo-700 transition duration-150 ease-out hover:ease-in">
        <Link className="inline-block align-middle mt-4 text-white" to='/clothes/1'> Volver a "Pantalon Raider" </Link>
      </button>

     {terminar ? (
            <Link to=""
						className="btn bg-primary text-white btn-block ">
						Finalizar Compra
					  </Link> 
            ) : (
            <ItemCount stock={clothes.stock} onAdd={onAdd} />
            )
      }
      <ItemCount stock={clothes.stock} onAdd={onAdd} id={clothes.id}/>

    </div>
  </div>

  )
}

export default ClothesDetail