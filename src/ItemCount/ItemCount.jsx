import React, { useState } from "react"
import { useAppContext } from "../context/AppContex"
import { useCartContext } from "../context/CartContext"

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
			<div className="flex gap-4 mt-4">
				<div className="flex flex-row">
					<button className="btn " onClick={handleRemove}>
						<i className="fas fa-minus"></i>
					</button>
					<label className="alert alert-white">{count}</label>
					<button className="btn " onClick={handleAdd}>
						<i className="fas fa-plus"></i>
					</button>
				</div>
				<div>
					<button
						className="btn bg-primary text-white btn-block "
						onClick={() => handleClick(id, count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount
