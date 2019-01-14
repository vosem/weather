import React, { Component } from "react";

class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.weatherMethod}>
				<input type="text" name="city" placeholder="Enter the city" />
				<button>Get weather</button>
			</form>
		);
	}
}

export default Form;
