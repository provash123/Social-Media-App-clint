import React, { Component } from "react";
import "./closefriend.css";

class CloseFriend extends Component {
  render() {
    const { user } = this.props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <li className="sidebarfriend">
        <img
          className="sidebarfriendimg"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="sidebarfriendname">{user.username}</span>
      </li>
    );
  }
}

export default CloseFriend;
