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
import PantalonRided from "../components/Store/PantalonRided";



 


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
              <ToggleDarkMode darkModeHandler={darkModeHandler}/> 
              <NavBar/>
              <Routes> 
                <Route path='/*' element = {<ItemContainer/>}/>
                <Route path='/home' element={<Home/>}/>  
                <Route path='/clothes' element={<ItemContainer/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/clothes/:clothesId' element={<ItemDetail/>}/>
                <Route path='/carrito'  element={<CartView/>}/>
                <Route path='/store' element={<PantalonRided/>}/>
              </Routes>
            </BrowserRouter>
            </CartContextProvider>
        </AppContextProvider>
      </DarkModeContext.Provider> 
      </>
      
      );
      
}
export default AppRouter;