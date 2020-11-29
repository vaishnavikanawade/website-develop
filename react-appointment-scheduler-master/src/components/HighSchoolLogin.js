import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			Username: 0,
			password: 0
		}
	}
	
    submit = () => {
        const
    {
        Username,password}=this.state;
        if(!Username || !password)
        {
            alert("Please fill the all fields")
        }
        else
        {
            alert("Login Successfully!!!!!")
        }
    }


	render() {
		return (
		<div className="login">

			
					<center>	<h1><b>School Login</b></h1></center>
					<p></p>
					<p></p>
					<label><b>UserName :</b></label><input type="text" name="Username" 
						 
							placeholder="Enter Username..." 
							onChange={(event) => { this.setState({ Username: event.target.value }) }}
						/><br />
						
						<label><b>Password :</b></label><input type="password" name="password"
							placeholder="Enter Password..."
							onChange={(event) => {this.setState({ password: event.target.value }) }}
						/><br />
						<p></p>
						<b><Link to="/schoolreset">Forgot Password?</Link></b>
						<p></p>

						<b>	<Button onClick={()=>this.submit()}>submit</Button></b>
						<p></p>
					
					
				<h5><b>Don't have an account?</b></h5>
			
				<b>	<Link to="/schoolregister">Create an account</Link></b>
                

				</div>
			
		);
	}
}

export default Login;


