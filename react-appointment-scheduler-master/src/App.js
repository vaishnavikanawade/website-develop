
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
//import Profile from './components/Profile';
import MySideBar from './components/sidebar/sidebar';
import './App.css';
import Meetings from './containers/Meetings';
import HomePage from './routes/homePage/homePage';
import schoolhomepage from './route/schoolhomepage/schoolhomepage';
//import Logout from './routes/Logout/Logout';
import Interests from './routes/interests/Interests';
import SchoolInterest from './route/interest/SchoolInterest';
import Header from './components/Header';
//import Main from './components/Main';
//import Footer from './components/Footer';
//import Nav from './components/Nav';
import Welcome from './components/Welcome';

import HighSchoolLogin from './components/HighSchoolLogin';
import HighSchoolRegister from './components/HighSchoolRegister';
import HighSchoolReset from './components/HighSchoolReset';
import HighSchoolMeeting from './containers/HighSchoolMeeting';
import Welcomeprofile from './components/Profile/Welcomeprofile';
import welprofileupdate from './route/updateprofile/welprofileupdate';
import Payment from './components/Payment';
import Pay from './components/Pay';
import amazonpay from './components/amazonpay';
import americanexp from './components/americanexp';
import applepay from './components/applepay';

import { Container } from 'react-bootstrap';
import ProfileUpdate from './routes/profileUpdate/profileUpdate'






// const isLoggedIn = () => {
//   return false
// }

class App extends Component {
  render() {
    const isDrawer = window.location.pathname !== "/" && window.location.pathname !== "/register"&&window.location.pathname !== "/reset"&&window.location.pathname !== "/login"&&window.location.pathname !== "/interests" && window.location.pathname!=="/welcome"  && window.location.pathname !== "schoollogin" && window.location.pathname !== "schoolregister" && window.location.pathname !=="schoolreset"
    //const MySideBar =window.location.pathname !=="/welcome"
   
    
    return (
      
      <div>
        
              
       
        <Router>
          <Container>
          
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/reset" component={Reset} />
            <Route exact path="/schoollogin" component={HighSchoolLogin} />
            <Route path="/schoolregister" component={HighSchoolRegister} />
            <Route path="/schoolreset" component={HighSchoolReset} />
            <Route path="/welcome" component={Welcome} />
           

            
            

          </Container>
          <div style={{ display: "flex" }}>
          
            <div style={{ float: "left", width: "250px", marginRight: "50px" }}>
              {isDrawer && <  MySideBar /> }
            </div >



           

           
           <div style={{ zIndex: 1 }}>

              <div style={{ float: "left", width: "1050px", marginLeft: "100px"}}>
                <Route  path="/homepage" component={HomePage} />
                <Route  path="/schoolhomepage" component={schoolhomepage} />
                <Route path="/meetings" component={Meetings} />
                <Route path="/profileupdate" component={ProfileUpdate} />
                <Route path="/welprofileupdate" component={welprofileupdate} />
                {/* //<Route path="/logout" component={Logout} /> */}
                <Route path="/interests" component={Interests} />
                <Route path="/SchoolInterest" component={SchoolInterest} />
                <Route path="/schoolmeeting" component={HighSchoolMeeting} />
                <Route path="/schoolpayment" component={Payment} />
                <Route path="/schoolpay" component={Pay} />
                <Route path="/schoolamazonpay" component={amazonpay} />
                <Route path="/schoolamericanexp" component={americanexp} />
                <Route path="/schoolapplepay" component={applepay} />
                
              </div>
             
            
              </div>
            </div>
          
        </Router>
      </div>
    );
  }
}

export default App;

