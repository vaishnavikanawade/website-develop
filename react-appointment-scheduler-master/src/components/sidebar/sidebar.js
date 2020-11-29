import React from "react";
import Sidebar from "react-sidebar";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux"


const ProfilePicture = ({ user }) => {
  console.log(user)
  const history = useHistory();
  return (
    <div>
      <div style={{ height: "220px" }}>
        <div style={{ height: "180px", }} onClick={() => { history.push("/profileupdate") }}>
          <img alt="profile_picture" width="100%" height="100%" src={user.profileUrl ? user.profileUrl : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
        </div>
        <div style={{ height: "50px", width: "100%", border: "0px" }}>
          {user.name}
        </div>
      </div>
    </div>
  );
}
const Option = ({ name, link, active }) => {
  const history = useHistory();
  return (
    <button onClick={() => { history.push(link) }} style={{ color: active ? "black" : "#33ccff", height: "50px", width: "100%", border: "0px", borderBottom: "0.5px solid black" }}>
      {name}
    </button>
  )
}



const Content = ({ user }) => {

  return (
    <div>
      <ProfilePicture user={user} />
    
      <Option name="Meetings" link="/meetings" />
      <Option name="Interests" link="/interests" />
      {/* //<Option name="Logout" link="/logout" /> */}
    </div>
  );
}
class MySidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      user:props.profile
    };
    console.log(props.profileUrl)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  


  render() {
    return (
      <Sidebar
     
        sidebar={<Content user={this.props.profile} />}
        open={this.state.sidebarOpen}
         onSetOpen={this.onSetSidebarOpen}

        styles={{ sidebar: { background: "white", width: "250px", position: "fixed" } }
      }
     

      />
    );
  }
}

const mapStateToProps = state => {
  return { profile: state.profile };
};

export default connect(mapStateToProps,null)(MySidebar);