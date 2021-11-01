import React from "react";
// import { Users } from "../../dummyData";
import { MoreVert } from "@material-ui/icons";
// import { useState } from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import "./post.css";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postprofileimg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/11.png"
                }
                alt=""
              />
            </Link>
            <span className="postusername">{user.username}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="posttopright">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext"> {post?.desc} </span>
          <img className="postimg" src={PF + post.img} alt="" />
        </div>

        <div className="postbottom">
          <div className="postbottomleft">
            <img
              className="likeicon"
              src={`${PF}like.png`}
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeicon"
              src={`${PF}heart.png`}
              alt=""
              onClick={likeHandler}
            />
            <span className="postlikecounter">{like} people like it</span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
