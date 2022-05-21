import React from 'react'
import ItemCard from '../items/ItemCard'

const ItemList = ({propsILC}) => {

  return (

    <div>
        <section className="text-gray-600 body-font justify-center text-center ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {propsILC.map ( (data) => {
                            return <ItemCard key={data.id} item={data} /> 
                        })}
                    </div>
                </div>
            </section>
    </div>
  )


}

export default ItemList