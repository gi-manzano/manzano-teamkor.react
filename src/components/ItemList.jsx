import { useEffect , useState } from 'react';
import {products as productsData} from "../data/clothes.js";
import ProductCard from './ProductCard.js';

const ItemList = () => { 

    const [products ,setProducts ] = useState ([])
    
    useEffect (() => {
       
        const getProducts = new Promise ( (resolve, reject) => {
            setTimeout (() => {
            resolve (productsData)  //*repasar consultar por reject y cathch
        }, 2000 )

        })

        getProducts.then ( (result) => {
            console.log ('promise completada',result);
            setProducts (result)
            
            console.log('fin del efecto');
            
            
        }, [])
        
    })




  return (
    <div>
      {products.map (products => <ProductCard key={products.id} productsData={products}/> )}
    </div>
  )
}

export default ItemList
