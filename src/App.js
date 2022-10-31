import React, {useState} from "react";
import axios from "axios";
import toTextualDescription from './toTextualDescription'
import weatherInterpretation from './Weather_interpretation'
import AutoLocation from "./AutoLocation";

function App() {
const [location, setLocation] = useState('');
const [locationData, setlocationData] = useState({});
const [weatherData, setWeatherData] = useState({});

async function searchLocation(event){
  const locationUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
   if (event.key === 'Enter') {
      await axios
        .get(locationUrl)
        .then((response) => {
          setlocationData(response.data);
          console.log(response.data)
          const url = response.data ? `https://api.open-meteo.com/v1/forecast?latitude=${response.data.results[0].latitude}&longitude=${response.data.results[0].longitude}&current_weather=true&timezone=auto&past_days=1` : null
          return url;
        })
        .then(async (url) => {
          await axios
          .get(url)
          .then((response) => {
            setWeatherData(response.data); 
            console.log(response.data)
          });
        });
         setLocation('')
 }
}
  return (
    <div className="app">
      <div className="container">
        <div className="search">
          <input 
          value={location}
          onChange= {event => setLocation(event.target.value)}
          onKeyPress ={searchLocation}
          placeholder='enter location'
          type="text"/>
        </div>
        <AutoLocation/>
        {locationData.results !== undefined && 
         <div className="top">
         <div className="location">
           <p>{locationData.results[0]?.name}</p>    
         </div>
         <div className="temp">
           {/* <p>temp:</p> */}
          <h1>{ weatherData.current_weather?.temperature } <span>&#8451;</span></h1>
         </div>
         <div className="description">
           <p>{weatherInterpretation(weatherData.current_weather?.weathercode)}</p>
         </div>
       </div>
        }
        
    {weatherData.current_weather !== undefined && 
    <div className="bottom">
    <div className="wind">
        <p>Wind</p>
        <p className="bold">{toTextualDescription(weatherData.current_weather?.winddirection)}</p>
        </div>
      <div className="wind-speed">
        <p>Speed</p>
        <p className="bold">{weatherData.current_weather?.windspeed} km/h</p>
      </div>
    </div>
    }
        
      </div>
    </div>
  );
}

export default App;
