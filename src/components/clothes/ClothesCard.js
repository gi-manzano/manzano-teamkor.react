import React from 'react'

  //*utilice api robots porque aun no encontre sobre el tema que busco

const ClothesCard = ( {data}) => {
  return (
    <div className="card w-96 shadow-xl bg-gray-900 font-mono text-lg text-slate-300" >
    <div className='border-2 border-pink-600 m-2 p-2'>

              
                <figure></figure><img className='h-15 ' src={`https://robohash.org/${data.id}`} alt=""/> 
      
                
                <div class="card-body">
                <div>{data.tipo}</div>
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