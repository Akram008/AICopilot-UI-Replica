import './App.css'
import Inbox from './pages/Inbox/Inbox'
import UserChat from './pages/UserChat/UserChat'
import AICoPilot from './pages/AICoPilot/AICoPilot'
import { useState } from 'react'

function App() {
  const [openChats, setOpenChats] = useState(false)
  const [userChatIpt, setUserChatIpt] = useState('')
  return (
    <div className='flex flex-wrap'>
      <Inbox openChats={openChats} setOpenChats={setOpenChats} />
      <UserChat openChats={openChats} setOpenChats={setOpenChats} userChatIpt={userChatIpt}/>
      <AICoPilot setUserChatIpt={setUserChatIpt}/>
    </div>
  )
}

export default App
