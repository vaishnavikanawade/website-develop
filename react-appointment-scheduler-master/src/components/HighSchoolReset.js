import React from 'react';
//import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Reset extends React.Component {
	constructor() {
		super();

		this.state = {
			email: 0
		}
	}
    
    
    submit = () => {
        const
    {
        email}=this.state;
        if(!email)
        {
            alert("Please Enter the Email First")
        }
        else
        {
            alert("Successful!!!!!")
        }
    }


	render() {
		return (
			<div className="Reset">
				<center>	<h1><b>Reset</b></h1></center>
                <p></p>
				<label><b>Enter the Email :</b></label><input type="text" name="email"
                  placeholder="Enter Email"
					onChange={(event) => { this.setState({ email: event.target.value }) }}
				/>
				<p></p>
				<b><Button onClick={() => this.submit()}>Done</Button></b>
                
			</div>


			
			
			
		);
	}
}

export default Reset;

