import AddIcon from "@material-ui/icons/Add"
import AppsIcon from "@material-ui/icons/Apps"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import CreateIcon from "@material-ui/icons/Create"
import DraftsIcon from "@material-ui/icons/Drafts"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import InboxIcon from "@material-ui/icons/Inbox"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import styled from "styled-components"
import { auth, db } from "../firebase"
import SideBarOptions from "./SideBarOptions"

const SideBar = () => {
  const [channels] = useCollection(db.collection("rooms"))
  const [user] = useAuthState(auth)

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Ziko HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SideBarOptions Icon={InsertCommentIcon} title='Threads' />
      <SideBarOptions Icon={InboxIcon} title='Mentions & reactions' />
      <SideBarOptions Icon={DraftsIcon} title='Saved items' />
      <SideBarOptions Icon={BookmarkBorderIcon} title='Channel browser' />
      <SideBarOptions Icon={PeopleAltIcon} title='People & user groups' />
      <SideBarOptions Icon={AppsIcon} title='Apps' />
      <SideBarOptions Icon={FileCopyIcon} title='File browser' />
      <SideBarOptions Icon={ExpandLessIcon} title='Show Less' />
      <hr />
      <SideBarOptions Icon={ExpandMoreIcon} title='Show More' />
      <hr />
      <SideBarOptions Icon={AddIcon} title='Add Channel' addChannelOption />
      {channels?.docs.map((doc) => (
        <SideBarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  )
}

export default SideBar

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.25;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    border: 1px solid #49274b;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    border-radius: 999px;
    background-color: white;
  }
`

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    display: flex;
    margin-left: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`
