import React, { useState } from 'react'
import useData from '../context/userContext'
import useWeather from '../context/weatherContext'

const Weather = () => {
    const {user}=useData()
    const [input,setInput]=useState("")
    const {setCity,weather}=useWeather()

    const handleSearch=(e)=>{
        e.preventDefault()
        setCity(input)
    }
  return (
    <div className=' flex flex-col items-center gap-10'>
        <h2 className=' text-3xl capitalize'>Welcome, {user.name}</h2>
        <div className='flex items-center justify-center gap-5'>
            <input type="text" placeholder='City name' className='border border-gray-700 w-[300px] py-1 px-3 text-black placeholder:text-black' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button className='px-5 py-1 border-none rounded-lg bg-blue-600 text-white' onClick={handleSearch}>Search</button>
        </div>
        {
        weather?
        <div className=' h-[400px] w-[500px] flex flex-col items-center justify-center text-2xl gap-9 rounded-xl bg-[#212121] text-[#fff]'>
            <p><b>City:</b> {weather.name}</p>
            <p><b>Weather:</b> {weather.weather[0].description}</p>
            <p><b>Temperature:</b> {weather.main.temp}°C</p>
            <p><b>Humidity:</b> {weather.main.humidity}%</p>
        </div>:
        <p></p>
        }
    </div>
  )
}

export default Weather