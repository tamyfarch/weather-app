import { useState, useEffect } from "react";

export const SearchForm = ({city, setCity}) => {
  // const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState([])
  const [icon, setIcon] = useState()
  const [description, setDescription] = useState("")
  const [wind, setWind] = useState("")
  const [tempChange, setTempChange] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
  };

  // const changeTempBtn = (valor) => {
  //    return tempChange == false ? valor : (valor * 1.8 + 32)
  // }
  const apiKey = "4467c1bf50118629e35df22b3127c587"
    useEffect (()=>{
        const fetchData = async () => {
            try {
                const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`)
                const data = await result.json()
                console.log(data)
                setTemperature(data.main.temp, "base")
                setDescription(data.weather.map(desc => desc.description))
                setIcon(data.weather.map(icon => icon.icon))
                setWind(data.wind.speed)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [city])

  // console.log(city)
  // console.log(temperature)
  // console.log(description)
  return (
    <div className="searchForm">
      <form onSubmit={handleSearch}>
        <label htmlFor="">Search City</label>
        <input type="text" placeholder="Search" value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
      <p>{temperature}°C</p>
      <p>{description}</p>
      <img icon={icon} alt="icono"/>
      <p>{wind}kmh</p>
    </div>
  );
};
