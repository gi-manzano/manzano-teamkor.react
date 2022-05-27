import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import { DarkModeContext } from "../context/darkModeContext";
import { useState } from 'react';
import ToggleDarkMode from "../components/ToggleDarkMode";
import AppContextProvider from "../context/AppContex";
import ItemDetail from "../components/items/ItemDetail";
import ItemContainer from "../components/items/ItemContainer";
import CartContextProvider from "../context/CartContext";
import CartView from "../components/Cart/CartView";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
// import PantalonRided from "../components/Store/PantalonRided";
// import Indumentaria from "../components/Store/Indumentaria";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
// import Finalizado from "../components/Finalizado/Finalizado";
import SavePago from "../components/SavePago";





const AppRouter = () => {

  const [darkMode, setDarkMode] = useState( false )

  const darkModeHandler = () => {
    setDarkMode ( darkState => !darkState )
  }

    return (
      <>
      <DarkModeContext.Provider value={darkMode}> 
        <AppContextProvider>
          <CartContextProvider> 
            <BrowserRouter>
              <NavBar/>
              <ToggleDarkMode darkModeHandler={darkModeHandler}/> 
              <Routes> 
                <Route path='/home' element={<Home/>}/>  
                <Route path='/*' element = {<ItemContainer/>}/>
                <Route path='/clothes' element={<ItemContainer/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/clothes/:clothesId' element={<ItemDetail/>}/>
                <Route path='/carrito'  element={<CartView/>}/>
                {/* <Route path='/PantalonRider' element={<PantalonRided/>}/>
                <Route path='/indumentaria' element={<Indumentaria/>}/> */}
                <Route path='/Lista' element={<ItemListContainer/>}/>
                <Route path='/SavePago' element={<SavePago/>}/>
                {/* <Route path='Fianlizado' element={<Finalizado/>}/> */}
                
              </Routes>
            </BrowserRouter>
            </CartContextProvider>
        </AppContextProvider>
      </DarkModeContext.Provider> 
      </>
      
      );
      
};
export default AppRouter;