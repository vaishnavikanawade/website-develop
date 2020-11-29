import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Register extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			Username: "",
			password: "",
			Firstname:"",
			Lastname:"",
			Collegename:"",
			Major:"",
			Class:"",
			
			email_validation: "",
			password_confirmation: ""
		}
	}
	
	valid()
	{
		if(!this.state.Username || !this.state.Firstname || !this.state.Lastname || !this.state.Collegename || !this.state.Major || !this.state.email || !this.state.password)
		{
			alert("Please fill all the fields")
		}
		else if(!this.state.email.includes('@') && this.state.password.length!==5)
		{
			this.setState({email_validation: "Invalid Email",password_confirmation: "Password must contain 5 characters" })
		}
		else if(!this.state.email.includes('@'))
		{
			this.setState({email_validation: "Invalid Email"})
		}
		else if(this.state.password.length!==5)
		{
			this.setState({password_confirmation: "Password must contain 5 characters" })
		}
		else
		{
			return true;
		}
	}


    submit = () => {
        if(this.valid())
        {
            alert("Register Successfully!!!!!")
        }
      }      
            
	
	render() {
		return (
			<div className="register">
			<center>		<h1><b>HighSchool Registration</b></h1></center>
                    <p></p>

		
					<label><b>Email  :</b></label>
					<tr></tr><input type="text" name="email"
						  placeholder=" Enter email..."
						 onChange={(event) => { this.setState({ email: event.target.value }) }}
					 />
                     <p style={{color:"red",fontsize:"14px"}}>{this.state.email_validation}</p>

                    <label><b>UserName:</b></label><input type="text" name="Username"
						 placeholder=" Enter Username..."
						 onChange={(event) => { this.setState({ Username: event.target.value }) }}
					 />

<p></p>
                   
				   <label><b>Password:</b></label>
				   <tr></tr><input type="password" name="password"
					   placeholder=" Enter password..."
					   onChange={(event) => { this.setState({ password: event.target.value }) }}
				   />
					  <p style={{color:"red",fontsize:"14px"}}>{this.state.password_confirmation}</p>

					 <p></p>

                     <label><b>FirstName :</b></label><input type="text" name="Firstname"
						 placeholder=" Enter Firstname..."
						 onChange={(event) => { this.setState({ Firstname: event.target.value }) }}
					 />
					 <p></p>
                     <label><b>LastName :</b></label><input type="text" name="Lastname"
						 placeholder=" Enter Lastname..."
						 onChange={(event) => { this.setState({ Lastname: event.target.value }) }}
					 />
					 <p></p>
                     <label><b>College :</b></label>
					 <tr></tr><input type="text" name="Collegename"
						 placeholder=" Enter Collegename..."
						 onChange={(event) => { this.setState({ Collegename: event.target.value }) }}
					 />
					 <p></p>

					 <label><b>Major :</b></label>
					 <tr></tr><input type="text" name="Major"
						 placeholder=" Enter Major..."
						 onChange={(event) => { this.setState({ Major: event.target.value }) }}
					 />
                    
					<p></p>

                     <label><b>Class :</b></label>
					 <tr></tr><input type="text" name="Class"
						 placeholder=" Enter the Class..."
						 onChange={(event) => { this.setState({ Class: event.target.value }) }}
					 />
                    
					<p></p>

			
					<b>	<Button onClick={()=>this.submit()}>submit</Button></b>
					<p></p>
					
					<b><Link to="/schoollogin">Login Here</Link></b>

			</div>
		);
	}
}

export default Register;