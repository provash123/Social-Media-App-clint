import React, { Component } from "react";
// import Profile from './profile/Profile';
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/SideBar";
import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightbar/RightBar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </>
    );
  }
}

export default Home;

// return (
//   <div>
//     <Profile/>
//   </div>
// );
