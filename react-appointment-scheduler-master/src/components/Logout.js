import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';


class Logout extends React.Component {
	constructor() {
		super();
		
		}
	
	
	render() {
		const MySideBar = window.location.pathname !== "/" && window.location.pathname !== "/register"&&window.location.pathname !== "/reset"&&window.location.pathname !== "/login"&&window.location.pathname !== "/logout"


		return (
			
			<div className="Logout">
				
           
        
            
					<h1>you have been Logout click on Link</h1>
					
						<Link to="/login">Logout</Link>
			
				</div>
			
		);
	}
}

export default Logout;
