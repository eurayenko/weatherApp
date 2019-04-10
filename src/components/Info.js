import React from 'react';
import clasess from './Info.module.css';

const Info = (props) => {
	return (
		<div className={clasess.wrapper}>
			<div className={clasess.text}>
				<h2>Weather App</h2>
				<p>Find out the weather in your city!</p>
			</div>	
		</div>
	);
}

export default Info