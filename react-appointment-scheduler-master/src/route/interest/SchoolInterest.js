import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class SchoolInterest extends Component {
  render() {
    return (
        
            <div className="Interest">
                   
            <h1>If you would change the meeting time or reshedule meeting then change on click !!!!!</h1>
            
            <h4>support <br></br>7 cups of coffee</h4>
                  <tr></tr> <Link to="/welcome">Logout</Link>
        </div>  
             
      
    );
  }
}

export default SchoolInterest;
