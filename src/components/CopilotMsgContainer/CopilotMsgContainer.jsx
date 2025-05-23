import React from 'react'

const CopilotMsgContainer = (props) => { 
  const {chat} = props 
  const {by, dp, text} = chat   
  return (
    <div className='flex w-full gap-2 mb-3'>
        <div className='w-8 h-8 flex items-center justify-center bg-red-500 rounded-full text-white'><p>{dp}</p></div> 
        <div className='flex flex-col justify-between items-start'>
            <p className='text-gray-900 font-semibold'>{by}</p>
            <p className='text-gray-500'>{text}</p>
        </div>
    </div>
  )
}

export default CopilotMsgContainer