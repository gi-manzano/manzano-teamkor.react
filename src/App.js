import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ConHijos from './components/ConHijos';


function App() {

//logica de mi app
//cosnt miFunction = () => {}


  return (
    <>
    
      <NavBar></NavBar>
      <ConHijos>
      <ItemListContainer greetin='Hora de activar 🏋️‍♀️!!'></ItemListContainer>
      </ConHijos>
      

    </>
  );
  
}

export default App;
