import React from 'react';
import classes from './Weather.module.css';

const Weather = (props) => {
	return (
		<div className={classes.wrapper}>
			{ props.state.city && 
				<ul className={classes.list}>
					<li className={classes.item}>City: <span className={classes.span}>{props.state.city}, {props.state.country}</span> </li>
					<li className={classes.item}>Temp: <span className={classes.span}>{props.state.temp} &deg;C</span> </li>
					<li className={classes.item}>Sunrise: <span className={classes.span}>{props.state.sunrise}</span> </li>
					<li className={classes.item}>Sunset: <span className={classes.span}>{props.state.sunset}</span> </li>
				</ul>		
			}
			<p className={classes.error}>{props.state.error}</p>
		</div>	
	);
}

export default Weather