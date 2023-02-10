// import React, {useState, useEffect} from 'react'

// const Forecast = ({city}) => {
//     const [nextDay, setNextDay] = useState("")

//  const apiKey = "4467c1bf50118629e35df22b3127c587"

//  useEffect (()=>{
//         const fetchData = async () => {
//             try {
//                 const result = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/weather?${city}&appid=${apiKey}`)
//                 const data = await result.json()
//                 console.log(data)
//                 // setTemperature(data.main.temp, "base")

//             }
//             catch (error) {
//                 console.log(error)
//             }

//         }
//         fetchData()
//     }, [city])


//   return (
//     <div>
//         <p>hola</p>
//     </div>
//   )
// }

// export default Forecast

import React, {useState, useEffect} from 'react'
import { Grid, CircularProgress } from "@mui/material";
import DataCard from "./DataCard";
const Forecast = () => {
    const [search, setSearch] = useState('Asuncion')
   const [state, setState] =  useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eb0b28dc1984d2f0f78c1f7488f24e60&units=metric`)
                const data = await response.json()
                const { main, weather, wind } = data
                const { description } = weather[0]
                const { speed } = wind

                setState({ ...main, description, speed })
            }
            catch (error) {
                console.error(error)
            }

        }
        fetchData()
    }, [search])

    console.log(search)
    if (!state) return <CircularProgress />
    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <DataCard title={state.description} subtitle={state.temp} />
                </Grid>
                <Grid xs={4}>
                    <DataCard title="Humidity" subtitle={state.humidity} />
                </Grid>
                <Grid xs={4}>
                    <DataCard title="Wind" subtitle={state.speed} />
                </Grid>
                <Grid xs={8}>
                    <DataCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default Forecast