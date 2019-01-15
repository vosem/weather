import React, { Component } from "react";

class Weather extends Component {
	render() {
		return (
			<div>
				{this.props.city && (
					<div>
						<p>
							Location: {this.props.city}, {this.props.country}
						</p>
						<p>Temperature: {this.props.temp}°С</p>
						<p>Humidity: {this.props.humidity}%</p>
						<p>Pressure: {this.props.pressure}</p>
						<p>Sunrise: {this.props.sunrise}, Sunset: {this.props.sunset}</p>
					</div>
				)}
				<p>{ this.props.error }</p>
			</div>
		);
	}
}

export default Weather;
