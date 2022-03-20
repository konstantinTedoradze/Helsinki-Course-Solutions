import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Country({country}) {
    console.log(country,'countryyy in country');
    const api_key = process.env.REACT_APP_API_KEY;
    const [weatherData,setWeatherData] = useState(null);
    const [weatherIcon,setWeatherIcon] = useState(null);
    
    const getWeatherData = async () => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]}&limit=5&appid=${api_key}`);
            if(response.status === 200){
                console.log(response.data[0].lat,'response data firestt')
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${api_key}`;
                const weatherResponse = await axios.get(url);  
                if(weatherResponse.status === 200){
                    setWeatherData(weatherResponse.data);
                    setWeatherIcon(weatherResponse.data.weather[0].icon);
                }  
            }       
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getWeatherData();
    },[]);
    console.log(weatherData,'weatherDataaaaaaaaaaaaa')
    console.log(weatherIcon,'url of iconnnn')

    let imgUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    return (
        <div>
        <h2>{country.name.common}</h2>
        <p>{country.capital[0]}</p>
        <p>area {country.area}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((lang,index) => <li key={index}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} width='300' height="200" />
        <h3>Weather in {country.capital[0]}</h3>
        {weatherData && <div>
            <p>temperature {Math.round((weatherData.main.temp - 273.15) * 100) / 100} Celsius</p>
            <img src={imgUrl} alt="weather icon pic"/>
            <p>Wind {weatherData.wind.speed} m/s</p>
        </div>}
      
      </div>
    )
}

export default Country
