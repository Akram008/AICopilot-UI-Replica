import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { BsThreeDots, BsFillMoonStarsFill } from "react-icons/bs";
import { SiSquare } from "react-icons/si";
import { MdMessage, MdKeyboardArrowDown, MdEmojiEmotions } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import OtherUserChat from '../../components/ChatComponent/OtherUserChat';
import LoggedInUserChat from '../../components/ChatComponent/LoggedInUserChat';

const chats = [
    {
        _id: 0,
        by: 'Luis Easton', 
        message: "I bought a product from your store in November for my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened." , 
        arrivalTime: '5min'
    }, 
    {
        _id: 1,
        by: "loggedInUser", 
        message: 'Let me just took into this for you. Luis.', 
        seen: true, 
        arrivalTime: '3min'
    }
]

const UserChat = (props) => { 
  const [allChats, setAllChats] = useState(chats)  
  const {openChats, setOpenChats, userChatIpt} = props
  const [inputText, setInputText] = useState('') 

  useEffect(()=>{
    setInputText(userChatIpt)
  }, [userChatIpt])

  const handleSubmit = (e) => {
    e.preventDefault() 
    const chat = {
        _id: uuidv4(),
        by: "loggedInUser", 
        message: inputText, 
        seen: true, 
        arrivalTime: 'Now'
    }
    setAllChats(prev => [...prev, chat]) 
    setInputText('')
  }

  return (
    <div className={`h-screen w-full bg-neutral-50 ${openChats ? 'md:w-1/2' : 'md:hidden'} lg:block lg:w-1/3`}>
        <div className='flex justify-between items-center p-5 h-1/10'>
            <h1 className='text-2xl text-gray-900 font-semibold'>Luis Easton</h1> 
            <div className='flex flex-row items-center gap-2'>
                <button className='flex items-center justify-center p-2 rounded-lg bg-gray-100'><BsThreeDots/></button>

                <button className='flex items-center justify-center p-2 rounded-lg bg-gray-100'><BsFillMoonStarsFill/></button>

                <button className='flex items-center justify-center gap-1 p-2 rounded-lg bg-gray-900 text-white' onClick={()=>setOpenChats(false)}><SiSquare/> Close</button>
            </div>
        </div>
        <div className='min-h-9/10 p-5 flex flex-col justify-between'>
            <div className='flex flex-col gap-3'>
                {allChats.map(each => each.by==='Luis Easton' ? <OtherUserChat key={each._id} chat={each}/> : <LoggedInUserChat key={each._id} chat={each}/>)}
            </div>
            <form className='mt-auto shadow-lg rounded-xl w-full p-3 border-1 border-gray-200' onSubmit={handleSubmit}>
                <p className='flex items-center gap-1 font-semibold'><MdMessage/>Chat<MdKeyboardArrowDown/></p>
                <textarea rows={2} className='w-full py-3 outline-none' placeholder='Use %K for shortcuts' onChange={(e)=>setInputText(e.target.value)} value={inputText}></textarea>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <button className='border-r-1 border-r-gray-800 px-1'><HiLightningBolt/></button>
                        <button className='px-1'><MdEmojiEmotions /></button>
                        <button className='px-1'></button>
                    </div>
                    <div className='flex items-center'>
                        <button className={`border-r-1 py-1 px-3 rounded-2xl transition-colors duration-300 ${inputText==='' ? 'border-gray-300 px-2 text-gray-500 bg-transparent' : 'bg-[#121212] text-slate-100'}`} type='submit'>Send</button>
                        <button className='px-2 text-gray-600'><MdKeyboardArrowDown/></button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default UserChat