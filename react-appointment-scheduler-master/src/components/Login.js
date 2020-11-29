import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


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
		//const isDrawer = window.location.pathname !== "/" && window.location.pathname !== "/register"&&window.location.pathname !== "/reset"&&window.location.pathname !== "/login"&&window.location.pathname !== "/Logout"

		return (
			<div className="login">
					<h1><b>Login</b></h1>	
				<label><b>UserName :</b></label>
					<input type="text" name="Username"

							placeholder="Enter Username..."
							onChange={(event) => { this.setState({ Username: event.target.value }) }}
						/>
						
						<label><b>password :</b></label><input type="password" name="password"
							placeholder="Enter password..."
							onChange={(event) => {this.setState({ password: event.target.value }) }}
						/><br />
					
						<b><Link to="/reset">Forgot password</Link></b>
						<p></p>

						<Button onClick={()=>this.submit()}>submit</Button>
						<p></p>
					
		
						

				<h3><b>Don't have an account?</b></h3>
				<b><Link to="/register">Create an account</Link></b>

				</div>
			
		);
	}
}

export default Login;
