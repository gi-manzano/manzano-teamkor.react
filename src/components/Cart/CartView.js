import React from "react";
import {useCartContext} from "../../context/CartContext"

function CartView () {

    const { cart, calcularTotal, deleteCart } = useCartContext ();

    return (
        <div>
            {cart.map (products => (
                <div key= {products.id}>
                    <h1>{products.name}</h1>
                    <p>Cantidad: {products.quantity}</p>
                    <p>$: {products.precio}</p>
                    <p>Total $ {products.precio * products.quantity}</p>
                    <button className="btn" onClick={()=>deleteCart(products.id)}>Delete</button>
                    <hr/>
                    <hr/>
                    <hr/>   
                </div>
                
            ))}
            <h1>Total de tu compra: $ {calcularTotal ()}</h1>
        </div>
    ) 
   
}

export default CartView