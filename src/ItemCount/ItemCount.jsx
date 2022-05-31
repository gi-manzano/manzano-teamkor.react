import React, { useState } from "react"
import { useAppContext } from "../context/AppContex"
import {  useCartContext } from "../context/CartContext"


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
	
	<div className="justify-items-center">
			<div className="inline-flex rounded-md content-center" role="group">
				<button type='button' onClick={handleRemove} className='w-15 py-1 px-5 inline-flex border-0 px-3 mx-1 focus:outline-none bg-pink-800 hover:bg-sky-800 hover:text-white rounded-l-full text-base mt-4 md:mt-0 text-lg font-bold'> - </button>
				<label  type='label' className="w-15 py-1 px-3 inline-flex border-0 px-3 mx-1 focus:outline-none bg-transparent text-base mt-4 md:mt-0 text-lg font-bold">{count}</label>
				<button type='button' onClick={handleAdd} className='w-15 py-1 px-5 inline-flex border-0  px-3 mx-1 focus:outline-none bg-pink-800 hover:bg-sky-800 hover:text-white rounded-r-full text-base mt-4 md:mt-0 text-lg font-bold'> + </button>
			</div>
		<div className="inline-flex rounded-md mx-4 mt-4 md:mx-1" role='group' >
    <button type='button' className="flex items-center border-0  py-1 px-3 mt-10 focus:outline-none bg-indigo-500 hover:bg-pink-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold m-20 p-10" onClick={() => handleClick(id, count)}> Agregar al Carrito </button>
    </div>
	</div>		
	</>
	)
}

export default ItemCount


