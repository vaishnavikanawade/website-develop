import React from 'react'
import Avatar from 'react-avatar-edit'
import { updateProfile } from "./profileUpdate.reducer";
import { connect } from "react-redux";

class ProfileUpdate extends React.Component {

    constructor(props) {
        super(props)
        const src = "";
        this.state = {
            preview: '',
            src
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClose() {
        this.setState({ preview: '' })
    }

    onCrop(preview) {
        this.setState({ preview })
    }
    render() {
        return (
            <div>
                <Avatar
                    width={390}
                    height={295}
                    onCrop={this.onCrop}
                    onClose={this.onClose}
                    src={this.state.src}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={this.state.preview} alt="Preview" />
                    <button style={{ height: "50px", width: "100px", margin: "50px" }} onClick={() => { this.props.updateProfile({name:"Vaishnavi",profileUrl:this.state.preview}) }} >  set as profile picture</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateProfile })(ProfileUpdate);