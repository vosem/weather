import React, { Component } from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "8f3402da9f52d031b9f9d6d8727b3798";

class App extends Component {
  state = {
    cod: undefined,
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);

      if (data.cod == "404") {
        this.setState({
          city: undefined,
          country: undefined,
          temp: undefined,
          humidity: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: 'City not found.'
        });
      } else {
        var sunset = data.sys.sunset * 1000;
        var sunsetDate = new Date(sunset);

        var sunsetDateFormatted =
          sunsetDate.getHours() + ":" + sunsetDate.getMinutes();

        var sunrise = data.sys.sunrise * 1000;
        var sunriseDate = new Date(sunrise);
        var sunriseDateFormatted =
          sunriseDate.getHours() + ":" + sunriseDate.getMinutes();

        this.setState({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          sunrise: sunriseDateFormatted,
          sunset: sunsetDateFormatted,
          error: undefined
        });
      }
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        humidity: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please enter city name in English."
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
