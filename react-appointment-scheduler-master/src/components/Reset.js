import React from 'react';
import { Button } from 'react-bootstrap'


class Reset extends React.Component {
	constructor() {
		super();

		this.state = {
			email: ""
		}
	}
	submit() {
		console.warn(this.state)
		alert("email sent to reset ur password")
	}


	render() {
		return (
			<div className="Reset">
				<h1><b>Reset</b></h1><br></br>

				<label><b>Enter Email :</b></label>
				<input type="text" name="email"

					placeholder="enter email..."
					onChange={(event) => { this.setState({ email: event.target.value }) }}
				/>
				<p></p>
				<Button onClick={() => this.submit()}>submit</Button>

			</div>


			
			
			
		);
	}
}

export default Reset;
