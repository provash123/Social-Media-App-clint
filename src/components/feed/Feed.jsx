import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [Posts, setPost] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPost(res.data);
    };
    fetchPost();
  }, [username, user]);
  
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
