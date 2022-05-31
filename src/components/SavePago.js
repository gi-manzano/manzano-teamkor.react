import {  addDoc, collection, getFirestore} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { DarkModeContext } from '../context/darkModeContext';



const SavePago = () => {

    const darkMode = useContext (DarkModeContext)
    const { cart, calcularTotal, deleteCart} = useCartContext ( );

     const [user, setUser] = useState({
      nombre:       "",
      apellido:     "",
      email:         "",
      celular:      "",
      direccion:    "",
      cp:           "",
      tarjeta:      "",
      cvv:          "",
      propietario:  "",
      vencimiento:  ""
  });

  function handleInput(event) {
      const target = event.target;
      const value = target.value;
      const nameInput = target.name;

      setUser({ user , [nameInput]: value });
  }
  console.log(user)

 
    const saveCarritoHandler = ( ) => {
      const buyer = {
        name: '',
        phone: '',
        email: '',
        }
      const carrito = {
        buyer: [buyer],
        cart: [...cart],
        items: cart.length,
        total: calcularTotal ()
        
        }

      console.log (carrito);
        saveToFirestore (carrito)
        deleteCart ();
    } 
        
    const saveToFirestore = async (carrito) => {
      const db = getFirestore ()   
      const { id } = await addDoc (collection ( db, 'carrito',) , carrito)
      
console.log(id);
    }


  return (
    <>
     <div className={ darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
     <strong>{ darkMode ? 'Modo: On' : 'Modo: Off'}</strong>
        <div className="py-12 flex justify-center">
          <div className="max-w-md mx-auto  md:max-w-xl mx-2">
            <form className="md:flex  ">
              <div className="w-full p-4 px-5 py-5">
                  <div className="flex flex-row mb-6">
                      <h2 className="text-3xl font-semibold">
                          Formulario de pago y envío
                      </h2>
                  </div>
                    <div className="mb-6">
                        <span className="text-white-100 body-font font-medium ml-4">Datos personales</span>
                        <div className="grid md:grid-cols-2 md:gap-2">
                            <input type="text" name="nombre" onChange={(event) => handleInput(event)}
                            value={user.nombre} 
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black"
                            placeholder="Nombre*"/>
                            <input type="text" name="apellido" onChange={(event) => handleInput(event)}
                            value={user.apellido} 
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black"
                            placeholder="Apellido*" />
                        </div>
                        <div className="grid md:grid-cols-3 md:gap-2">
                            <input type="email" name="mail" onChange={(event) => handleInput(event)}
                            value={user.email} 
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm col-start-1 col-end-3 text-black"
                            placeholder="E-mail*" />
                            <input type="number" name="celular" onChange={(event) => handleInput(event)}
                            value={user.celular} 
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black "
                            placeholder="Celular*" />
                        </div>
                    </div>
                  <div className="mb-6">
                      <span className="text-white-100 body-font font-medium ml-4">Dirección de envío</span>
                      <input type="text" name="direccion" onChange={(event) => handleInput(event)}
                        className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black"
                        placeholder="Calle y Número*" />
                      <div className="grid md:grid-cols-2 md:gap-2">
                      <input type="number" name="cp" onChange={(event) => handleInput(event)}
                        className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black"
                        placeholder="Código Postal*" />
                      </div>
                      <input type="text" name="provincia" onChange={(event) => handleInput(event)}
                        className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black"
                        placeholder="Provincia*" />
                  </div>
                  <div className="mb-6">
                    <span className="text-white-100 body-font font-medium ml-4">Datos de pago</span>
                    <div className="grid md:grid-cols-3 md:gap-2">
                        <input type="number" name="tarjeta" onChange={(event) => handleInput(event)}
                            value={user.tarjeta}
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm col-start-1 col-end-3 text-black" 
                            placeholder="Número de tarjeta*" />
                        <input
                            type="number" name="cvv" onChange={(event) => handleInput(event)}
                            value={user.cvv}
                            className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black" 
                            placeholder="CVV*" />
                    </div>
                      <div className="grid md:grid-cols-3 md:gap-2">
                          <input
                              type="text" name="propietario" onChange={(event) => handleInput(event)}
                              value={user.propietario}
                              className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm col-start-1 col-end-3 text-black"
                              placeholder="Nombre y Apellido*" />
                          <input
                              type="number"
                              name="vencimiento" onChange={(event) => handleInput(event)}
                              value={user.vencimiento}
                              className="border rounded h-10 w-full focus:outline-none focus:border-green-600 px-2 mt-2 text-sm text-black"
                              placeholder=" DD/MM/AAAA*" />
                      </div>
                  </div>

                      <div className="flex justify-end mb-6">
                          <h4 className="text-gray-900 title-font text-lg font-medium text-white-400 bg-yellow-600">
                              Total a pagar: $ {calcularTotal()}
                          </h4>
                      </div>

                    <div className="text-gray-600 body-font flex justify-between items-center pt-2">
                        <Link to="../home">
                            <button
                                type="button"
                                className="btn bg-gradient-to-r from-orange-600 to-blue-500 hover:from-pink-600 hover:to-yellow-500">
                                Volver
                            </button>
                        </Link>
                        <Link to="../clothes">
                            <button
                                type="button"
                                className="btn bg-gradient-to-r from-orange-600 to-blue-500 hover:from-pink-600 hover:to-yellow-500" >
                                Home
                            </button>
                        </Link>
                            <Link to="../finalizado">
                                <button
                                    type="button"
                                    value="Submit"
                                    className="btn bg-gradient-to-r from-orange-600 to-blue-500 hover:from-pink-600 hover:to-yellow-200"
                                    onClick={() => {saveCarritoHandler (user)}} >
                                    Finalizar
                                </button>
                            </Link> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
          
    
    
    </> 
  )

}

export default SavePago;