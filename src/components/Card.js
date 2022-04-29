import React from 'react'

const Card = ({title}) => {
  return (
    <div style={{border:'solid pink 4px', margin:'20px', pading: '20px'}}>
      <strong>{title}</strong>
    </div>
  )
}

export default Card