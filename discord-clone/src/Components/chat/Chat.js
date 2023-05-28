import AddCircleIcon from "@material-ui/icons/AddCircle"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import EmojiEmotionIcon from "@material-ui/icons/EmojiEmotions"
import GifIcon from "@material-ui/icons/Gif"
import React from "react"
import Message from "../message/Message"
import "./chat.css"
import ChatHeader from "./ChatHeader"

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat__messages'>
        <Message />
        <Message />
        <Message />
      </div>
      <div className='chat__input'>
        <AddCircleIcon fontSize='large' />
        <form>
          <input placeholder={`Message #TESTCHANNEL`} />
          <button className='chat__inputButton' type='submit'>
            Send Message
          </button>
        </form>
        <div className='chat__inputIcons'>
          <CardGiftcardIcon fontSize='large' />
          <GifIcon fontSize='large' />
          <EmojiEmotionIcon fontSize='large' />
        </div>
      </div>
    </div>
  )
}

export default Chat
