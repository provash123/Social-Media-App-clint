import React from "react";
import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./profile.css";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  console.log('user',user)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <div>
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img
                className="profilecoverimg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/12.png"
                }
                alt=""
              />
              <img
                className="profileuserimg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/11.png"
                }
                alt=""
              />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">{user.username}</h4>
              <span className="profileinfodesc">{user.desc}</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed username={username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
