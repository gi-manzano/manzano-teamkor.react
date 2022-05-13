import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import NavBar from '../components/NavBar';
import ClothesContainer from '../components/clothes/ClothesContainer';
import ClothesDetail from '../components/clothes/ClothesDetail';
import { DarkModeContext } from "../context/darkModeContext";
import { useState } from 'react';
import ToggleDarkMode from "../components/ToggleDarkMode";
import CartContextProvider from "../context/CartContext";
import AppContextProvider from "../context/AppContex";
 


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
              <NavBar></NavBar>
              <ToggleDarkMode darkModeHandler={darkModeHandler}/> 
              <Routes> 
                <Route path='/*' element = {<ClothesContainer/>}/>
                <Route path='/home' element={<ItemListContainer/>}/>  
                <Route path='/clothes' element={<ClothesContainer/>}/>
                <Route path='/clothes/:clothesId' element={<ClothesDetail/>}/>  
              </Routes>
          </BrowserRouter>
          </CartContextProvider>
          </AppContextProvider>
          </DarkModeContext.Provider> 
      </>
      
      );
      
}
export default AppRouter