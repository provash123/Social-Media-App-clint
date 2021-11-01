import { Component } from "react";
import { Users } from "../../dummyData";
import {
  Bookmark,
  Chat,
  Group,
  WorkOutline,
  Event,
  HelpOutline,
  RssFeed,
  VideocamSharp,
  School,
} from "@material-ui/icons";
import "./sidebar.css";
import CloseFriend from "./../closefriend/CloseFriend";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <VideocamSharp className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarbutton">Show more</button>
          <hr className="sidebarhr" />
          <ul className="sidebarfriendlist">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
