import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { clothesData } from '../../data/clothesData'


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
 }


  return (
    
  

    <div className="card flex w-96 ml-4 mt-6 mb-8 bg-green border-solid border-2 border-sky-500" data-aos="flip-left">
      <h2 className="card-title ml-4">Detalle de producto!</h2>
    
  <div classNane="card-body">
     <div className="text-left ml-4 ">
       {/* <div><strong>{clothes.id}</strong></div> */}
       <figure><img className="h-15" src= { `https://robohash.org/${clothes.id}`} alt=""/></figure> 
       <div>{clothes.name}</div>
       <div>{clothes.tipo}</div>
       <div>${clothes.precio}</div>
     </div>

    <div type="button" className="card-actions justify-center m-5 btn bg-indigo-700">
    <Link className="inline-block align-middle mt-4" to='/clothes/15'> Volver a "Pantalon Raider" </Link>
    </div>
  </div>
</div>
  )
}

export default ClothesDetail