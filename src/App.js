import React, { Component } from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "8f3402da9f52d031b9f9d6d8727b3798";

class App extends Component {

  gettingWaether = async () => {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
    const data = api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div class="App">
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
