import React from 'react'
import { Link } from 'react-router-dom';
import CartContextProvider, { useCartContext } from '../context/CartContext';

const SavePago = () => {

    const { cart, calcularTotal } = useCartContext (CartContextProvider);
    // const {cantidadInCart} = useCartContext (CartView)
    
        const user = {
        name: '',
        phone: '',
        email: ''
        }
        const carrito = {
        buyer: [user],
        cart: [...cart],
        items: cart.length,
        total: calcularTotal ()
        }
        console.log (carrito);
       

  return (
    <div>Pago
    {/* {CartView.map ( c => <li key={c}> {c} </li>)} */}
    <Link to='/Home' className='btn'> Regresar a inicio</Link>
    </div>
  )


 
}

export default SavePago