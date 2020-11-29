
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
     
      <nav>
          <ul>
          <li><a href="#">About us</a></li>
          </ul>
           <ul>
          <dl><Link to="/login">College Students</Link></dl>
          
         <dl><Link to="/schoollogin">  School Students</Link></dl>
     
           </ul>
           
          
          
      </nav>
 
    
    );
  }
}

export default Nav;
