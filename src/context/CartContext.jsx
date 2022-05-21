import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

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

			setCart(newCart)
			return
		}

		products.quantity = cantidad
		setCart([...newCart, products])
	}

	const deleteFromCart = (products) => {
		const newCart = [...cart]

		const productsIsInCart = isInCart(products.id)

		if (!productsIsInCart) {
			return
		}

		const deleteProducts = newCart.filter((prod) => prod.id !== products.id)

		setCart(deleteProducts)
	}

	const deleteCart = () => setCart([])

	console.log(cart)

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;

