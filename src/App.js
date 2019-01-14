import React, { Component } from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "8f3402da9f52d031b9f9d6d8727b3798";

class App extends Component {

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
