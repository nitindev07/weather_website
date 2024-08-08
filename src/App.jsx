import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import TopButtons from "./components/TopButtons"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [query,setQuery]=useState({q:"assam"})
  const [units,setUnits]=useState('metric')
  const [weather,setWeather]=useState(null)

  const  getWeather= async()=>{
    const cityName = query.q ? query.q : "current Location"
    toast.info(`Fetching Weather Data for ${cityName.toUpperCase()}`)


    const data = await getFormattedWeatherData({...query,units}).then((data)=>{
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data)
    })
  }

  useEffect(() => {
    getWeather()
  }, [query,units])

  const formatBackground=()=>{
    if(!weather) return 'from-cyan-600 to-blue-700' 
    const threshold =units === 'metric' ? 20:60
    if(weather.temp <= threshold) return "from-cyan-600 to-blue-700"
    return "from-yellow-600 to-orange-700"
  }

  return (
    <div className={`lg:mx-auto max-w-screen-lg mx-4 mt-4 py-5  md:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <div className="hidden md:block">
      <TopButtons setQuery={setQuery}/>
      </div>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      {weather && (
        <div className="pb-8">
      <TimeAndLocation weather={weather}/>
      <TempAndDetails weather={weather} units={units}/>
      <Forecast title="3 hour step forcast" data={weather.hourly}/>
      <Forecast title="daily forcast" data={weather.daily}/>
        </div>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>
  )
}

export default App
