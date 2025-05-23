import React from 'react'

const OtherUserChat = (props) => { 
  const {chat} = props 
  const {by, message, arrivalTime} = chat 
  return (
    <div className='w-full flex items-end gap-2'>
        <div className='w-10 h-10 rounded-full flex bg-purple-500 items-center justify-center p-1'><p className='text-white'>{by[0]}</p></div> 
        <div className='flex flex-col items-start gap-1 w-7/10 bg-gray-100 p-3 rounded-xl'>
            <p className='text-sm text-gray-900 font-semibold'>{message}</p>
            <p className='text-gray-400 text-xs'>{arrivalTime}</p>
        </div>
    </div>
  )
}

export default OtherUserChat