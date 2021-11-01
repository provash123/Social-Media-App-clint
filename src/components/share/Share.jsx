import React, { useContext, useRef, useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import { axios } from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('clicked',e)
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err)
      }
    }

    try {
      await axios.post("/posts", newPost);
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img
            className="shareprofileimg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/11.png"
            }
            alt=""
          />
          <input
            placeholder={"what's in your mind " + user.username + "?"}
            className="shareinput"
            ref={desc}
          />
        </div>
        <hr className="sharehr" />
        <form className="sharebottom" onSubmit={submitHandler} > 
        
          <div className="shareoptions">
            <label htmlFor="file" className="shareoption">
              <PermMedia htmlColor="tomato" className="shareicon" />
              <span className="shareoptiontext">Photo or Video</span>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareoption">
              <Label htmlColor="blue" className="shareicon" />
              <span className="shareoptiontext">tag</span>
            </div>
            <div className="shareoption">
              <Room htmlColor="green" className="shareicon" />
              <span className="shareoptiontext">location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="goldenrod" className="shareicon" />
              <span className="shareoptiontext">fellings</span>
            </div>
            </div>
            <button className="sharebutton" type="submit">
              Share
            </button>
        
        </form>
      </div>
    </div>
  );
};

export default Share;
