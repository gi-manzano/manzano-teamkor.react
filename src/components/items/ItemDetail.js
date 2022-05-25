import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { itemData } from '../../data/itemData'
import ItemCount from '../../ItemCount/ItemCount'

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
      }, 1000);
    })
  }; 

const [isInCart, setIsInCart]= useState (true);

const {cart} = useCartContext();
console.log (cart);

function onAdd (count) {
  setIsInCart (true)
} 

  return (
    
  <div className='flex flex-col m-20 border-2 rounded-lg'>
    
      <p className='pb-5 m-2 text-2xl'>Detalle de producto!</p>
      <div className='text-justify-center ml-4 text-withe'>
        <img className='max-w-xs hover:shadow-lg transition duration-300 ease-in-out rounded-lg ' src= {clothes.img} alt={clothes.id}/> 
        <hr/> 
        <br/>
        <div>{clothes.name}</div>
        <div>{clothes.tipo}</div>
        <div>Stock: {clothes.stock}</div>
        <h3>$ {clothes.precio}</h3>
      </div>
      <button className="btn card-actions m-2 bg-indigo-500 transition duration-150 ease-out hover:ease-in">
        <Link className="inline-block align-middle m-4 text-white" to='/clothes'> Seguir comprando </Link>
      </button>
      
      {isInCart ? 
          ( <button className='btn card-actions m-2 bg-indigo-500 transition duration-150 ease-out hover:ease-in'> <Link to="/carrito" className="inline-block align-middle m-4 text-white"> 
          Ver carrito
            </Link></button>
          ) : ( <ItemCount stock={clothes.stock} onAdd={onAdd} />)
      }
      <ItemCount stock={clothes.stock} onAdd={onAdd} id={clothes.id}/>

  </div>

  )}

export default ItemDetail

