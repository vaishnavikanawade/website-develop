import React, { Component } from 'react';
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import './todo.css';
class Header extends Component {
  render() {
    return (
     
      <header>
      
      <Nav/>
      
      
        <div className="head">
            <h1>7 cups< br/> of coffee</h1>
            <div>
              <p>chat with college students about theire universities,major and admissions</p>
              
            </div>
        </div>
        <Main/>
        <Footer/>
      </header>
     
      
    );
  }
}

export default Header;