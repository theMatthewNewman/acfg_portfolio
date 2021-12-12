import classes from "./Head.module.css"
import {useState} from 'react';

const Head = props => {
    const [isWeather, setIsWeather] = useState(false)
    const[weather, setWeather] = useState({
	tempF: '',
	tempC: '',
	icon: '',
	condition: '',
	location: '',
    })

    if (!isWeather) {
    fetch("https://api.weatherapi.com/v1/forecast.json?q=philadelphia", {
	headers:{
	    key: "f10e8e529d1a44a3860174516210508",
	}
    }
    ).then(response => response.json()
    ).then(content => {
	const cond = content.forecast.forecastday[0].day.condition
	setWeather({
	    condition: cond.text,
	    icon: cond.icon,
	    location: content.location.name,
	    tempF: content.current.temp_f,
	    tempC: content.current.temp_c
	})
	setIsWeather(true)

    })
    }
    

    return(
	<div className ={classes.box}>
	  {isWeather ?
	   <div className ={classes.weather}>
	     <h1 className={classes.location}>{weather.location}</h1>
	     <img className={classes.icon} alt={weather.condition} src={weather.icon}/>
	     <h2 className={classes.condition}>{weather.condition}</h2>
	     <p className={classes.temps}>
	       {weather.tempF}
	       <strong>&#176;F / </strong>
	       {weather.tempC}
	       <strong>&#176;C </strong>
	     </p>
	   </div>
	  : null}
	  <h1 className={classes.name}>Matthew Newman</h1>
	  
	</div>
    )
    
}

export default Head;
