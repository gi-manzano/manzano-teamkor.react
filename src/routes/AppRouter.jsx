import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import NavBar from '../components/NavBar';
import { DarkModeContext } from "../context/darkModeContext";
import { useState } from 'react';
import ToggleDarkMode from "../components/ToggleDarkMode";
import AppContextProvider from "../context/AppContex";
import CartContextProvider from "../context/CartContext";
import ItemDetail from "../components/items/ItemDetail";
import ItemContainer from "../components/items/ItemContainer";


 


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
                <Route path='/*' element = {<ItemContainer/>}/>
                <Route path='/home' element={<ItemListContainer/>}/>  
                <Route path='/clothes' element={<ItemContainer/>}/>
                <Route path='/clothes/:clothesId' element={<ItemDetail/>}/>
               
              </Routes>
            </BrowserRouter>
        </CartContextProvider>
        </AppContextProvider>

      </DarkModeContext.Provider> 
      </>
      
      );
      
}
export default AppRouter;