import React from 'react'
import { Link } from 'react-router-dom'


  //*utilice api robots porque aun no encontre sobre el tema que busco

  
const ClothesCard = ( {data}) => {
  
  const { tipo, name, precio , id } = data;

 

  return (

    <div className="card" >
      <div className='flex flex-col place-items-center'>
        <div className="w-96 shadow-xl bg-gray-900 font-sans text-white text-lg shadow-lg" >
            <div className="border-2 border-pink-600 m-2 p-2">

              
              <div className="card-body grid-cols-4 flex justify-start">
                <div>{ tipo }</div>
                <figure><img className="h-15" src= { `https://robohash.org/${data.id}`} alt=""/></figure> 
                <div>{ name }</div>
                <div>${ precio }</div>
                    <button type="button" className="btn bg-gradient-to-r from-green-600 to-blue-500 hover:from-pink-500 hover:to-yellow-500">I wanet this</button>
              </div>
                <Link className="btn btn-primary" to={`/clothes/${ id }`}> Ver + </Link>
    
        
            </div> 
        </div>
      </div>
    </div>
    
 
    
  )
}

export default ClothesCard