import React from 'react'

  //*utilice api robots porque aun no encontre sobre el tema que busco

const ClothesCard = ( {data}) => {
  return (
    <div className='border-2 border-pink-600 m-2 p-2'>

              
                <img className='h-15 ' src={`https://robohash.org/${data.id}`}/> 
      
      
                <div>{data.pictureUrl}</div>
                <div>{data.name}</div>
                <div>{data.tipo}</div>
        
    </div> 
   
  )
}

export default ClothesCard