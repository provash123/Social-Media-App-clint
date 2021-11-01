import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import "./rightbar.css";
import { axios } from "axios";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([""]);
  console.log("friends", friends);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);

        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <div>
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="assests/gift.png" alt="" />
          <span className="birthdaytext">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today{" "}
          </span>
        </div>
        <img className="rightbarad" src="assests/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">{user.city}</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">{user.from}</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">
              {user.relationShip === 1
                ? "single"
                : user.relationShip === 2
                ? "Marid"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friend</h4>
        <div className="rightbarfollowings">
          {friends.map((friend) => (
            <div className="rightbarfollowing">
              <img
                src={
                  friend.profilePicture
                    ? PF + friend.profilePicture
                    : PF + "/person/11.png"
                }
                alt=""
                className="rightbarfollowingimg"
              />
              <span className="rightbarfollowingname">{friend.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
