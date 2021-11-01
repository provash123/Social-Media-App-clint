import React, { Component } from "react";
import "./online.css";

class Online extends Component {
  render() {
    const { user } = this.props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <li className="rightbarfriend">
        <div className="rightbarprofileimgcontainer">
          <img
            className="rightbarprofileimg"
            src={PF + user.profilePicture}
            alt=""
          />
          <span className="rightbaronline"></span>
        </div>
        <span className="rightbaruser">{user.username}</span>
      </li>
    );
  }
}

export default Online;
