import React from "react";
import {useCartContext} from "../../context/CartContext"

function CartView () {

    const { cart, calcularTotal, deleteFromCart,  } = useCartContext ();

    return (
        <div className="card card-container">
            {cart.map (products => (
                <div key= {products.id}>
                    <h1>{products.name}</h1>
                    <p>Cantidad: {products.quantity}</p>
                    <p>$: {products.precio}</p>
                    <p>Total $ {products.precio * products.quantity}</p>
                    <button className="btn" onClick={ ()=> deleteFromCart(products.id) }>Delete</button>
                    <hr/>
                    <br/>
                    <br/>   
                </div>
                
            ))}
            <h1>Total de tu compra: $ {calcularTotal ()}</h1>
            <hr/>
            <hr/>
            <button>Finalizar Compra</button>

                
        </div>
    ) 
   
}

export default CartView