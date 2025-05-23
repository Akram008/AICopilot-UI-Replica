import React from 'react'
import { IoCreateOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const CopilotMsgFinnContainer = (props) => {
  const {chat, setUserChatIpt} = props 
  const {by, dp, text} = chat   
  return (
    <div className='flex w-full gap-2'>
        <div className='min-w-8 h-8 flex items-center justify-center bg-black rounded-lg text-white'><p>{dp}</p></div> 
        <div className='flex flex-col justify-between items-start'>
            <p className='text-gray-900 font-semibold'>{by}</p>
            <div className='flex flex-col p-3 rounded-xl bg-linear-to-br from-indigo-300 to-rose-200 text-start'>
                <p>{text}</p>
                <div className='flex w-full bg-white p-2 mt-3 rounded-lg shadow-xl'>
                    <button className='flex items-center justify-center font-semibold w-9/10 border-r-1 border-gray-500' onClick={()=>setUserChatIpt(text)}><IoCreateOutline/>Add to composer</button>
                    <button className='w-1/10 px-2'><IoIosArrowDown/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CopilotMsgFinnContainer