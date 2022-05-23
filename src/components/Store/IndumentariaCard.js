import React from 'react'

const IndumentariaCard = ({item : indumentaria}) => {
  return (
    <div>
    <div>ID: {indumentaria.id}</div>
    <div>Nombre: {indumentaria.titulo}</div>
    <div>Estilo: {indumentaria.tipo}</div>
    <div>Precio: ${indumentaria.precio}</div>
    <div>Stock: {indumentaria.stock}</div>
    <hr/>
    <br/>
    </div>
  )
}

export default IndumentariaCard