import React from 'react'

const ProductCard = ({productsData}) => {
  return (
    <div style={{border:'solid pink 5px', margin:'20px', pading: '20px', background:'black'}}>
        <strong>{productsData.name}</strong>
        <div>{productsData.tipo}</div>
        <div>{productsData.precio}</div>
    </div>
  )
}

export default ProductCard