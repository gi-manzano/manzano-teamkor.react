import { Link } from 'react-router-dom'
import CartContextProvider, { useCartContext } from '../../context/CartContext'
// import CartView from '../Cart/CartView'


const Pago = () => {

    const { cantidadInCart, calcularTotal} = useCartContext (CartContextProvider);
    // const {cantidadInCart} = useCartContext (CartView)
    
        const user = {
        name: '',
        phone: '',
        email: ''
        }
        const carrito = {
        buyer: [user],
        total: calcularTotal (),
        cantidad: cantidadInCart.length
         
        }
        console.log (carrito);
       

    

    
  return (
    <div>Pago
    {/* {CartView.map ( c => <li key={c}> {c} </li>)} */}
    <Link to='/Home' className='btn'> Regresar a inicio</Link>
    </div>
  )
}

export default Pago