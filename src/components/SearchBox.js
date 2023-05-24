import { useState } from "react";
import './SearchBox.css'

export default function SearchBox() {
    const [cityName, setCityName] = useState("");
    const [forcasts, setForcasts] = useState([]);

    const handleKeyDown = async function (event) {
        if(event.key === 'Enter' && cityName.trim().length > 2) {
            const URL = "https://api.weatherapi.com/v1/forecast.json?key=9be66113245b4cb5bdf75133232105&q=" + cityName + "&days=3&aqi=no&alerts=no"
            try {
                const response = await fetch(URL, {method: 'GET', headers: {Accept: 'application.json'}});
                if(!response.ok){
                    throw new Error('Error failed to send an HTTP GET Request: ${response.status}')
                }
                const data = await response.json();
                console.log(data.forecast.forecastday)
                setForcasts(data.forecast.forecastday)
            }
            catch {
                console.error(err);
            }
        }
    }

    function handleChange(event) {
        setCityName(event.target.value);
    }
    
    return (
        <div>
            <input type="text"
                className="searchBox"
                placeholder="Enter city name"
                onChange={handleChange}
                onKeyDown={handleKeyDown}>
            </input>
            <h3>Weather for {cityName}</h3>
            <ul>
                {forcasts.map(function (forecast, i) {
                    return (
                        <li key={i}>
                            <span>{forecast.date}</span>
                            <span>{forecast.day.maxtemp_c}</span>
                        </li>

                    )
                })
                }
            </ul>
        </div>
    )
}