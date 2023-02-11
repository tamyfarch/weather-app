import './App.css';
import {useState} from 'react'
import Forecast from './Components/Forecast';
import Form from './Components/Form';
import DataCard from './Components/DataCard';
import { TextField } from '@mui/material';
function App() {

  return (
    <div className="App">
      <Forecast />
    </div>
  );
}

export default App;
