import React from 'react'

const LoggedInUserChat = (props) => {
    const {chat} = props 
    const {by, message, arrivalTime, seen} = chat
  return (
    <div className='w-full flex items-end justify-end gap-2'>
        <div className='w-7/10 flex flex-col items-start gap-1 bg-violet-200 p-3 rounded-xl'>
            <p className='text-sm text-gray-900 font-semibold'>{message}</p>
            <p className='text-gray-400 text-xs self-end'>{seen ? 'Seen' : ''} . {arrivalTime}</p>
        </div>
        <div className='w-10 h-10 rounded-full flex bg-red-500 items-center justify-center p-1'><p className='text-white'>{by[0]}</p></div> 
    </div>
  )
}

export default LoggedInUserChat