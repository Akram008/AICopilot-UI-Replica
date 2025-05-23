import React from 'react'

const InboxUser = (props) => { 
   const {user, setOpenChats} = props  
   const {name, source , open, arrivalTime, message, color} = user 
  return (
    <li className='w-full flex flex-row items-center p-2 border-b-1 border-gray-100' onClick={()=>setOpenChats(true)}>
        <div className={`${color} text-white rounded-full flex items-center justify-center w-10 h-10`}><p>{name[0]}</p></div>
        <div className='flex flex-col justify-between items-start ml-2'>
            <p className={`${open ? 'text-[#333333]': 'text-[#121212] font-semibold'}`}>{name} . {source}</p> 
            <p className={`${open ? 'text-[#444444]' : 'text-[#121212]'}`}>{message}...</p> 
        </div>
        <p className='self-end ml-auto'>{arrivalTime}</p>
    </li>
  )
}

export default InboxUser