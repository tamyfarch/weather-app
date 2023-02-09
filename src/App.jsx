import './App.css';
import {ExtractJson} from './Components/ExtractJson.jsx'
import { SearchForm } from './Components/SearchForm';
import {useState} from 'react'

function App() {

  const [busqueda, setBusqueda] = useState("")

  console.log(busqueda, "app")


  return (
    <div className="App">
      <SearchForm busqueda={busqueda} setBusqueda={setBusqueda}/>
      <ExtractJson busqueda={busqueda}/>
      
    </div>
  );
}

export default App;
