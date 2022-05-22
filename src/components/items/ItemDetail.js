import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { itemData } from '../../data/itemData'
import ItemCount from '../../itemCount/ItemCount'

const ItemDetail = () => {
  const { clothesId } = useParams ()
  const [clothes, setclothes] = useState( {} )

 
useEffect (  () => {

  (async () => {
    const itemData =  await getItemDetail()
    if ( itemData) {
      setclothes (itemData)
    }
  }) ()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [clothesId])

const getItemDetail = () => { 
    return new Promise ( (resolve) => {
      setTimeout(() => {
        resolve( itemData.find( c => c.id == clothesId ) )
      }, 2000);
    })
  };

 // context agregar productos
// const [terminar, setTerminar] = useState(false)
//   function onAdd (count)  {
//   setTerminar (true)}
//   console.log ('fin')
const [isInCart, setIsInCart]= useState (false);

const {cart} = useCartContext();
console.log (cart);

function onAdd (count) {
  setIsInCart (true)
} 

  return (

    
  <div className='flex flex-col m-5 p-12 border-2 rounded-lg backdrop-green'>
    
      <p className='pb-2 text-2xl'>Detalle de producto!</p>
      <div className='text-justify-center ml-4 text-withe'>
        <img className='w-48 pb-6 max-w-xs hover:shadow-lg transition duration-300 ease-in-out' src= {clothes.img} alt={clothes.id}/> 
        <div>{clothes.name}</div>
        <div>{clothes.tipo}</div>
        <div>Stock: {clothes.stock}</div>
        <h3>$ {clothes.precio}</h3>
      </div>
      <button className="card-actions justify-center m-5 btn bg-indigo-700 transition duration-150 ease-out hover:ease-in">
        <Link className="inline-block align-middle mt-4 text-white" to='/clothes'> Ir a Pagina principal </Link>
      </button>
      
      {isInCart ? 
          ( <Link to="/carrito" className="btn text-white btn-block "> 
          Ir a carrito
            </Link>
          ) : ( <ItemCount stock={clothes.stock} onAdd={onAdd} />)
      }
      <ItemCount stock={clothes.stock} onAdd={onAdd} id={clothes.id}/>

  </div>

  )}

export default ItemDetail