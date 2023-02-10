import './App.css';
import {useState} from 'react'
import Forecast from './Components/Forecast';
import Form from './Components/Form';
import DataCard from './Components/DataCard';
import { TextField } from '@mui/material';
function App() {

  const [city, setCity] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault()

    }
  return (
    <div className="App">
      <TextField id="outlined-search" label="Search field" type="search" onChange={(e) => setCity(e.target.value)}/>
      <Form />
      <DataCard />
      <Forecast city={city}/>
    </div>
  );
}

export default App;
