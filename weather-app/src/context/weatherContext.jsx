import { createContext, useContext, useEffect, useState } from "react";

export const WeatherContext=createContext();

export const WeatherProvider=({children})=>{
    const [weather,setWeather]=useState(null)
    const apiKey="a39b841ab0f192aa62215bc805f54ca6"
    const [city,setCity]=useState("")
    useEffect(()=>{
       if(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res=>res.json())
        .then(data=>setWeather(data))
        .catch(error=>console.log("Error in fetching",error))
       }
    },[city])
    return (
        <WeatherContext.Provider value={{weather,setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default function useWeather(){
    return useContext(WeatherContext)
}
