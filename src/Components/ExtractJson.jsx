import React, { useState, useEffect } from "react";

export const ExtractJson = ({busqueda}) => {
    const [value, setValue] = useState([]);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda},uk&APPID=4467c1bf50118629e35df22b3127c587`

    useEffect (()=>{
        const fetchData = async () => {
            try {
                const result = await fetch(url)
                const json = await result.json()
                setValue(result)
                console.log(json)
            }
            catch (error) {
                console.log(error)
            }
            
        }
        fetchData()
    }, [])

    

        console.log(value, "value")
    return (
        <div>

            {/* <p>{value.name}</p> */}
            {/* {
                value.map(datos => {
                    <h2>{datos.title}</h2>
                    
                })
            } */}
        </div>
    );
}