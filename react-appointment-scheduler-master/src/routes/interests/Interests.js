import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Interests extends Component {
  render() {
    return (
        
            <div className="Interest">
                   
            <h2>if you would change the meeting time or reshedule meeting then change on click !!!!!</h2>
            
            <h4>support <br></br>7 cups of coffee</h4>
                   <Link to="/welcome">Logout</Link>
        </div>  
             
      
    );
  }
}

export default Interests;