import React from 'react'

  //*utilice api robots porque aun no encontre sobre el tema que busco

const ClothesCard = ( {data}) => {
  return (
    <div class="card w-96 shadow-xl bg-black">
    <div className='border-2 border-pink-600 m-2 p-2'>

              
                <figure></figure><img className='h-15 ' src={`https://robohash.org/${data.id}`} alt=""/> 
      
                <div>{data.tipo}</div>
                <div class="card-body">
                <div>{data.pictureUrl}</div>
                <div>{data.name}</div>
                
                <div>${data.precio}</div>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
        
    </div> 
    </div>
   
  )
}

export default ClothesCard