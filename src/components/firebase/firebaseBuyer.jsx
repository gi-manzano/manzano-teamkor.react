import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"

const db = getFirestore ()
const productosColeccion = collection(db, "productos")
const categoryColeccion = collection(db, "category")
const ordenCartColeccion = collection(db, "orden")

export const getProductos = async () => {
    const querySnapshot = await getDocs( productosColeccion )
    let dbProductos = []
    querySnapshot.forEach(products => {
        dbProductos.push(products.data())
    });
    return dbProductos;
}

export const getCategorias = async () => {
    const querySnapshot = await getDocs( categoryColeccion )
    let dbCategorias = []
    querySnapshot.forEach(products => {
     
        dbCategorias.push({id: products.id, ...products.data()})
    });
 
    return dbCategorias;
}

export const saveOrden = async (array) => {
    const respuesta = await addDoc(ordenCartColeccion, array)
    /* console.log("grabarCompra"); */
    return respuesta
}
