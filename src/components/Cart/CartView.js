import React from "react";
import {useCartContext} from "../../context/CartContext"

function CartView () {

    const { cart, calcularTotal, deleteFromCart } = useCartContext ();

    return (
    <div className="card-body">
        <div className="card w-96 bg-neutral-400 text-primary-content">
            {cart.map (products => (
                <div key= {products.id}>
                    <h1>{products.name}</h1>
                    <p>Cantidad: {products.quantity}</p>
                    <p>Costo: $ {products.precio}</p>
                    <p>Total: $ {products.precio * products.quantity}</p>
                    <button className="btn bg-pink-600" onClick={ ()=> deleteFromCart(products.id) }>Delete</button>
                    <hr/>
                    <br/>
                    <br/>   
                </div>   
            ))}
            <h1>Total de tu compra: $ {calcularTotal ()}</h1>
            <hr/>
            <hr/>
            <button className="btn">Finalizar Compra</button>
        </div>      
    </div>
    ) 
   
}

export default CartView