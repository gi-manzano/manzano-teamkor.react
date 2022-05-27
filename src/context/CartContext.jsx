import React, { createContext, useContext, useState } from "react"


const CartContext = createContext({
	carrito: [],
	addToCart: () => {},
	deleteFromCart: () => {}

});


export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
	
	// Logica carrito de compras
	const [cart, setCart] = useState([])
	
	// Validar si existe el item en  carrito
	const isInCart = (id) => cart.find((products) => products.id === id)

	// Agregar item al carrito
	const addToCart = (products, cantidad) => {
		const newCart = [...cart]

		const productsIsInCart = isInCart(products.id)
		if (productsIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productsIsInCart.id)
			].quantity += cantidad
			setCart(newCart);
		} else {
		products.quantity = cantidad
		setCart((previousCart) => [...newCart, products])
		}
	}



	// delete item de cart
	const deleteFromCart = (id) => {
		const productsRemoved = cart.filter((products) => products.id !== id);
		setCart (productsRemoved);
	}
	const deleteCart = () => setCart([])
	
	//cantidad en carrito 
	 const cantidadInCart = () =>
	{ let total = 0;
		cart.forEach ((products)=> {
			total = total + products.quantity
		});
	 return total;
	};
	

	//calcular el total
	const calcularTotal = () => {
		let total = 0;
		cart.forEach ((products) => {
			total = total + products.precio * products.quantity;
		});
		return total;
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
				isInCart,
				calcularTotal,
				cantidadInCart,
				
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;


export const useCart = () => {
	return useContext (CartContext)
};

