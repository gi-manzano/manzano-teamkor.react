import {  addDoc, collection, doc , getFirestore, updateDoc, writeBatch } from 'firebase/firestore';

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
        
    const saveToFirestore = async (carrito) => {
      const db = getFirestore ()   
      const { id } = await addDoc (collection ( db, 'carrito') , carrito)
      console.log(id);
    } 

    const updateHandler = async ()   => {
      const id = '5gB9zCizyyuobwyyMk7k'
      const db = getFirestore ()
      const docTo = doc (db, 'carrito', id)
      try{
        await updateDoc (docTo, {total: 100})
        } catch (error){
          console.log ('error en la matrix', error)
        }
    }

    const batchHandler = () => {
      const db = getFirestore ()
      const batch = writeBatch (db)

      const doc1 = doc (db, 'carrito', '5gB9zCizyyuobwyyMk7k' )
      batch.update (doc1, {total: 66});

      const doc2 = doc (db, 'carrito', 'GPGVYuKHa5aMUsPEA5jJ' )
      batch.update (doc2, {total: 80});

      const doc3 = doc (db, 'carrito', 'IRBx6RLMjWiOEyHbtXvy' )
      batch.delete (doc3);

      batch.commit()
    }

  return (
    <div className='card-body'> Pago
    {/* {carrito.map ()}  */}
     
    <button onClick={saveCarritoHandler} className='btn mt-2'> Salvar carrito</button>
    <button onClick={updateHandler} className='btn mt-2'> Actualizar carrito</button>
    <button onClick={batchHandler} className='btn mt-2'> Batch carrito</button>
    </div>
  )


 
}

export default SavePago