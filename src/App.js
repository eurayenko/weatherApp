import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import './App.css';

const API_KEY = '9ad552cf52a572b1dd9196ceb552bb41';

class App extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined

	};

	getWeather = async (event) => {
		event.preventDefault();
		let city = event.target.elements.city.value;
		if (city) {
			let API_URL = await 
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
			let data = await API_URL.json();
			console.log(data);
			if (data.cod === 200) {
				let sunriseTime = new Date();
				sunriseTime.setTime(data.sys.sunrise*1000);
				let sunsetTime = new Date();
				sunsetTime.setTime(data.sys.sunset*1000);
				this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				sunrise: `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`,
				sunset: `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`,
				error: undefined
				});
			} else {
				this.setState({
				error: 'Incorrect city entry.'
			});
			}
		} else {
			this.setState({
				error: 'Incorrect city entry.'
			});
		};
		
	};

  render() {
    return (
      <div className="wrapper">
        <Info />
        <Form getWeather = {this.getWeather} state = {this.state} />
      </div>
      );
  }
}

export default App