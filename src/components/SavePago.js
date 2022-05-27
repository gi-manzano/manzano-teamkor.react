import {  addDoc, collection, getFirestore } from 'firebase/firestore';

import { useCartContext } from '../context/CartContext';


const SavePago = () => {

    const { cart, calcularTotal} = useCartContext ( );
    
    
    
    const saveCarritoHandler = () => {
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
        saveToFirestore (carrito)

    }

      const saveToFirestore = (carrito) => {
        const db = getFirestore ()
        const carritoCollection = collection ( db, 'carrito') 
            
        addDoc (carritoCollection, carrito).then ((response ) => { 
           console.log (response.id);
          })
        }  
        

  return (
    <div className='card-body'> Pago
    {/* {cart.map (carrito => <div key={carrito}> {carrito}</div> )} */} 
     
    <button onClick={saveCarritoHandler} className='btn'> salvar carrito</button>
    </div>
  )


 
}

export default SavePago