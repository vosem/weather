import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<form className="form" onSubmit={this.props.weatherMethod}>
				<input className="form__city-input" type="text" name="city" placeholder="Enter city name" />
				<button className="form__city-submit-btn" >Get weather</button>
			</form>
		);
	}
}

export default Form;
