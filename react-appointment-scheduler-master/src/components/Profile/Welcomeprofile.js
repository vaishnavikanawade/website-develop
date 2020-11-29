import React from 'react';
import Sidebar from "react-sidebar";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";


  
const Profilepicture= ({user})=>{
  console.log(user)
  const history = useHistory();
  return (
    <div>
      <div style={{height:"220px"}}>
          <div style={{height:"180px"}} onClick={() => { history.push("/welprofileupdate") }}>
              <img  alt="Profile" width="80%" height="97%" border-radius="100px" margin-bottom="10px" src={user.profileUrl ? user.profileUrl : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}  class="image_profilepic" />
          </div>
          <div style={{ height:"50px", width:"100%",border:"5px"}}>
              {user.name}
          </div>
      </div>
      </div>
  );
}

const Option=({name, link,active})=>{
  const history=useHistory();

  return (
      <button onClick={()=>{history.push(link)}} style={{color:active?"blue":"#000066", height:"50px", width:"100%",border:"2px", borderBottom: "0.7px solid black"}}>
          {name}
      </button>
  )
}

const Contents=({user})=>{
  return (
    <div>
      <center> <Profilepicture user={user}
      />  </center> 
      
        <Option name="Meetings" link="/schoolmeeting"/>
        <Option name="Payment" link="/schoolpayment"/>
        <Option name="Interest" link="/schoolinterest"/>
    
      </div> 
        );
      }

class Welcomeprofile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         user:props.profile,
        sidebarOpen: true
        };

        console.log(props.profileUrl)
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
        }

        onSetSidebarOpen(open) {
          this.setState({ sidebarOpen: open });
     }

	render() {
		return (
			<div className="Welcomeprofile">
			<p></p>
    
      <Sidebar sidebar={<Contents user={this.props.profile}/>}
        open={this.state.sidebarOpen}
        styles={{sidebar: { background: "skyblue",width:"250px"}}}>
         	<p></p>
          </Sidebar>
  		</div>
		);
	}
}

const mapStateToProps = state => {
  return { profile: state.profile };
};

export default connect(mapStateToProps,null)(Welcomeprofile);




