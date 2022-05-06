import React from 'react'

const ProductCard = ({product}) => {

    const { image, name, id, precio, tipo } = product;

  return (
    <div style={{border:'solid pink 5px', margin:'20px', pading: '20px', background:'black'}}>
        <div>{ id }</div>
        <strong>{ name }</strong>
        <div>{ image }</div>
        <div>{ tipo }</div>
        <div>{ precio }</div>
    </div>
  )
}

export default ProductCard