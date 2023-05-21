import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'

function SidebarChat() {
  return (
    <div className="sidebarChat">
    <Avatar />
    <div className="sidebarChat__info">
    <h2>Room name</h2>
    <h3>This is the last message </h3>
    </div>
    </div>
  
  );
}

export default SidebarChat
