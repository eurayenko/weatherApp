import React from 'react';
import Weather from './Weather';
import clasess from './Form.module.css';

const Form = (props) => {
	return (
			<div className={clasess.wrapper}>
				<form className={clasess.form} onSubmit = {props.getWeather} >
					<input className={clasess.input} name='city' type="text" placeholder="Enter city" />
					<button className={clasess.btn}>Get Wether</button>
				</form>
			<Weather state = {props.state} />	
			</div>
			);
}

export default Form