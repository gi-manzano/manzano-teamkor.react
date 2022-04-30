import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ConHijos from './components/ConHijos';
// import Card from './components/Card';
// import Contador from './components/Contador';
// import ItemList from './components/ItemList';
import ClothesContainer from './components/clothes/ClothesContainer';




function App() {

//logica de mi app
//cosnt miFunction = () => {}


  return (
    <>
    
      <NavBar></NavBar>
      <ConHijos>
      <ItemListContainer greetin='Hora de activar 🏋️‍♀️!!'></ItemListContainer>
      </ConHijos>
      {/* <Card title='In door'></Card> */}

      
      {/* <Contador></Contador>  */}
      {/* <ItemList></ItemList> */}
      <ClothesContainer/>
      
      

    </>
  );
  
}

export default App;
