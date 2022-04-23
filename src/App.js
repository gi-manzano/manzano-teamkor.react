import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ConHijos from './components/ConHijos';


function App() {

//logica de mi app
//cosnt miFunction = () => {}


  return (
    <div>
    
      <NavBar></NavBar>
      <ItemListContainer greetin='Hora de activar!!'></ItemListContainer>
      <ConHijos>
      </ConHijos>
    </div>
  );
  
}

export default App;
