import './App.css';
import { SearchForm } from './Components/SearchForm';
import {useState} from 'react'
import Forecast from './Components/Forecast';
import Form from './Components/Form';

function App() {

  const [city, setCity] = useState("");

  return (
    <div className="App">
      {/* <SearchForm city={city} setCity={setCity}/>
      <Forecast city={city}/> */}
      {/* <Form city={city}/> */}

      <Forecast city={city}/>
    </div>
  );
}

export default App;
