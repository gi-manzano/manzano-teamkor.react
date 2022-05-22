import React, { useState } from "react"
import { useAppContext } from "../context/AppContex"
import {  useCartContext } from "../context/CartContext"
// import { useCartContext } from "../context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		const findProducts = products.find((products) => products.id === id)

		if (!findProducts) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProducts, cantidad)
		onAdd(count)
	}

	return (
		<>
				<div className="flex flex-col text-center">
				<div className="p-2">
					<button onClick={handleRemove} className='border rounded-md px-1  hover:bg-sky-800'> - </button>
					<label className="alert alert-white">{count}</label>
					<button onClick={handleAdd} className='border rounded-md px-1  hover:bg-sky-800'> + </button>
				</div>
				<div>
					<button onClick={() => handleClick(id, count)}> Agregar al Carrito </button>
				</div>
				</div>
			
		</>
	)
}

export default ItemCount


