import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContextProvider from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { productsIsInCart,countItem,precioTotal,deletCart } = useContext(CartContextProvider);

  if (productsIsInCart.length === 0) {
      return (
          <div className="flex-auto justify-center mx-auto">
              <h2 className="flex justify-center flex-auto mt-4 text-2xl font-bold text-gray-600">
                  No hay productos en su carrito, pero...
              </h2>
              <img alt="dinero" src="dinero.png" className="mx-auto mt-10" />
              <Link to="../catalogo/todo">
                  <div className="flex justify-center mt-10">
                      <button className="inline-flex items-center border-0 py-1 px-3 mx-1 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold ">
                          Ir al catálogo
                      </button>
                  </div>
              </Link>
          </div>
      );
  } else {
      return (
          <div>
              <div>
                  {productsIsInCart.map((data) => {
                      return <CartItem key={data.id} item={data}></CartItem>;
                  })}
              </div>

              <div className="flex flex-col flex-auto ">
                  <h3 className="flex justify-center text-blue-700 text-s font-medium">
                      Productos en el carrito: {countItem()}
                  </h3>
                  <h3 className="flex justify-center text-blue-700 text-s font-medium">
                      Precio total del carrito: $ {precioTotal()}
                  </h3>
              </div>

              <div className=" flex flex-wrap justify-center mt-6 mb-20">
                  <Link to="">
                      <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold animate-bounce">
                          Ir a pagar
                      </button>
                  </Link>
                  <button onClick={deletCart} className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                      Vaciar carrito
                  </button>
                  <Link to="">
                      <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                          Seguir comprando
                      </button>
                  </Link>
              </div>
          </div>
      );
  }
}

export default Cart