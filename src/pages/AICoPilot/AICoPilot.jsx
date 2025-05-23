import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { FiSidebar } from "react-icons/fi";
import { FaIntercom } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import CopilotMsgContainer from '../../components/CopilotMsgContainer/CopilotMsgContainer';
import CopilotMsgFinnContainer from '../../components/CopilotMsgContainer/CopilotMsgFinnContainer';


const AICoPilot = (props) => {
  const {setUserChatIpt} = props  
  const [selectedTab, setSelectedTab] = useState('aiCopilot')  
  const [userInput, setUserInput] = useState('')
  const [chats, setChats] = useState([])
  const [chat, setChat] = useState({
    id: '',
    by: 'You', 
    dp: 'I', 
    text: ''
  }) 

  useEffect(()=>{
  }, [])

  const handleSuggestion = (e) => {
    setUserInput(e.target.textContent.split('Suggested')[1]) 
    setChat({...chat, id: uuidv4(), text: e.target.textContent.split('Suggested')[1]})
  }

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
    setChat({...chat, id: uuidv4(), text: e.target.value})
  }

  const handleChats = () => {
    setChats(prev => [...prev, chat]) 
    setUserInput('')
    setTimeout(() => {
    setChats(prev => [...prev, {
        id: '',
        by: 'Fin', 
        dp: '...', 
        text: 'We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.'
    }])
    }, 2000);
    
  }

  const chatsContainer = () => (
    <div className='self-start mb-auto p-3'>
        {chats.map(each=> each.by === 'You' ? <CopilotMsgContainer key={each.id} chat={each} /> : <CopilotMsgFinnContainer key={each.id} chat={each} setUserChatIpt={setUserChatIpt}/>)}
    </div>
  )

  return (
    <div className='h-screen w-full bg-indigo-50 md:w-[50%] lg:w-1/3'>
       
        <div className='h-1/10 flex items-center justify-between px-5 border-b-1 border-gray-300'>
       
            <ul className='flex flex-row items-center gap-5'>
                <li className={`flex items-center font-semibold py-5 ${selectedTab==='aiCopilot'? "border-b-2 text-blue-950 border-blue-950": "text-gray-500"}`} id='aiCopilot' onClick={(e)=>setSelectedTab(e.target.id)}><FaIntercom className='text-blue-600'/>AI Copilot</li>
                <li className={` font-semibold py-5 ${selectedTab==='details'? "border-b-2 text-blue-950 border-blue-950": "text-gray-500"}`} id='details' onClick={(e)=>setSelectedTab(e.target.id)}>Details</li>
            </ul>
       
            <button className=''><FiSidebar/></button>
        </div>
       
        <div className='min-h-9/10 flex flex-col items-center justify-center text-center'>
            {chats.length > 0 ? chatsContainer() : 
            (
            <div className='mt-auto flex flex-col items-center justify-center'>
                <h1 className='text-4xl'><FaIntercom/></h1> 
                <h1 className='text-xl font-semibold'>Hi, I'm Fin AI Copilot</h1>
                <p className='text-gray-500 text-sm'>Ask me anything about this conversation</p>
            </div>
            )}
            <div className='z-10 mt-auto bottom-0 flex flex-col items-start w-full p-3 bg-gradient-to-t from-pink-100 via-rose-100 to-indigo-50 shadow-md rounded-xl'>
            
                <p className='bg-white flex px-2 py-1 rounded-lg font-semibold mb-3 shadow-xl hover:cursor-pointer' onClick={handleSuggestion}><span className='font-bold flex items-center'>Suggested<MdAttachMoney/></span> How do I get a refund?</p>
            
                <div className='flex items-center w-full bg-white px-4 py-2 rounded-xl shadow-xl'>
                    <input type='text' value={userInput} onChange={handleUserInput} className='w-9/10 outline-none' placeholder='Ask a question..' />
                    <button className='w-1/10 text-gray-500' onClick={handleChats}><FaArrowUp /></button>
                </div>       
            </div>
        </div>

    </div>
  )
}

export default AICoPilot