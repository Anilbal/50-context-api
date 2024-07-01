import './App.css'
import Login from './component/Login'
import useData, { UserProvider } from './context/userContext'
import { WeatherProvider } from './context/weatherContext'

function App() {
  return (
    <UserProvider>
      <WeatherProvider>
      <Login/>
      </WeatherProvider>
    </UserProvider>
  )
}

export default App
