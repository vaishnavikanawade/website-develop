import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

class Register extends React.Component {
	constructor() {
		super();

		this.state = {
			Username: "",
			Firstname:"",
			Lastname:"",
			Collegename:"",
			Major:"",
			Email: "",
			Class:"",
			Password: "",
			nameerror:"",
			passerror:""
		}
	}
	valid()
	{
		 if(!this.state.Email.includes('@') && this.state.Password.length<5)
		{
			this.setState(
				{nameerror:"invalid email",passerror:"password length should be more than 5"})
		}
		else if(!this.state.Email.includes('@'))
		{
			this.setState(
				{nameerror:"invalid email"})
		}
		else if(this.state.Password.length<5)
		{
			this.setState(
				{passerror:"password length should be more than 5"})
		}
		else
		{
			return true
		}
	}
	submit()
	{
		
		this.setState(
			{nameerror:"",passerror:""})
		if(this.valid())
		{
			console.log(this.state)
			alert("form has been submitted")

		}
		
	}

	
	render() {
		return (
			<div className="register">
					<h2><b>college student Registration</b></h2><br></br>
					
					<label><b>Email :</b></label><br></br>
					<input type="text" name="Email"
						 
						 placeholder=" Enter email..."
						 onChange={(event) => { this.setState({ Email: event.target.value }) }}
					 /><p style={{color:"red",fontSize:"14px"}}>{this.state.nameerror}</p>


					<label><b>Password :</b></label>
					 <input type="password" name="Password"
						 
						 placeholder=" Enter Password..."
						 onChange={(event) => { this.setState({ Password: event.target.value }) }}
					 /><p style={{color:"red",fontSize:"14px"}}>{this.state.passerror}</p>
					<label><b>UserName :</b></label>	
					<input type="text" name="Username"
						 
						 placeholder=" Enter Username..."
						 onChange={(event) => { this.setState({ Username: event.target.value }) }}
					 /><p></p>
					<label><b>FirstName :</b></label>
					 <input type="text" name="Firstname"
						 
						 placeholder=" Enter Firstname..."
						 onChange={(event) => { this.setState({ Firstname: event.target.value }) }}
					 /><p></p>
					<label><b>LastName :</b></label>
					 <input type="text" name="Lastname"
						 
						 placeholder=" Enter Lastname..."
						 onChange={(event) => { this.setState({ Lastname: event.target.value }) }}
					 /><p></p>
					<label><b>CollegeName :</b></label>
					 <input type="text" name="Collegename"
						 
						 placeholder=" Enter Collegename..."
						 onChange={(event) => { this.setState({ Collegename: event.target.value }) }}
					 /><p></p>
					<label><b>Major :</b></label><p></p>
					 <input type="text" name="Major"
						 
						 placeholder=" Enter Major..."
						 onChange={(event) => { this.setState({ Major: event.target.value }) }}
					 />
					 <p></p>
					 <label><b>Class :</b></label><br></br>
					  <input type="text" name="Class"
						 
						 placeholder=" Enter Class..."
						 onChange={(event) => { this.setState({ Class: event.target.value }) }}
					 />
				<p></p>
				
				<Button onClick={()=>this.submit()}>submit</Button>
						<p></p>
		

				<b><Link to="/login">Login Here</Link></b>
			</div>
		);
	}
}

export default Register;
