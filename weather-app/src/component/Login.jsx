import React, { useState } from 'react'
import useData from '../context/userContext'
import Weather from './Weather'

const Login = () => {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")

    const {setUser,isLoggedIn}=useData()
    const handleLogin=(e)=>{
        e.preventDefault()
        setUser({name,password})
        // isLoggedIn=true
    }
  return (
    <>{
        isLoggedIn?
        <Weather/>
        :
    <div className=' flex flex-col items-center justify-center h-screen w-full gap-5'>
        <input type="text" name="" id="" placeholder='name' className='border border-gray-700 w-[300px] p-1 text-black placeholder:text-black' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="" id="" placeholder='password' className='border border-gray-700 w-[300px] p-1 text-black placeholder:text-black' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        
        <button className='p-2 border border-gray-500' onClick={handleLogin}>Login</button>
    </div>
    }
    </>
  )
}

export default Login