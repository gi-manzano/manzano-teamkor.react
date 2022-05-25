import { Link } from 'react-router-dom'

const ItemCard = ( {data}) => { const { tipo, name, precio , id, img} = data;

  return (

      <div className='flex flex-col place-items-center'>
        <div className="w-96 shadow-xl bg-sepia-900 font-sans text-sky-900 text-lg shadow-lg" >
          <div className="border-4 border-pink-600 m-2 p-2"> 
            <div className="card-body grid-cols-4 flex justify-start"> 
              <div> { tipo }</div>
              <img src= {img} alt={id}/> 
              <div>{ name }</div>
              <div>${ precio }</div>
              <Link className="btn bg-gradient-to-r from-green-600 to-blue-500 hover:from-pink-600 hover:to-yellow-500" to={`/clothes/${ id }`}> Ver + </Link>
            </div>
            </div> 
          </div>
        </div>
  )
}
export default ItemCard