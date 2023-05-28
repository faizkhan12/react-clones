import { Avatar } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import CallIcon from "@material-ui/icons/Call"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import HeadsetIcon from "@material-ui/icons/Headset"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import MicIcon from "@material-ui/icons/Mic"
import SettingsIcon from "@material-ui/icons/Settings"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import React from "react"
import "./Sidebar.css"
import SidebarChannel from "./SidebarChannel"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>Faiz Khan</h3>
        <ExpandMoreIcon />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className='sidebar__addChannel' />
        </div>
        <div className='sidebar__channelsList'>
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className='sidebar__voice'>
        <SignalCellularAltIcon
          className='sidebar__voiceIcon'
          fontSize='large'
        />
        <div className='sidebar__voice__Info'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className='sidebar__profile'>
        <Avatar src='https://faizkhan.xyz/static/media/avatar1.0a9cd423.png' />
        <div className='sidebar__profileInfo'>
          <h3>@faizkhan</h3>
          <p>#myid</p>
        </div>
        <div className='sidebar__profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
