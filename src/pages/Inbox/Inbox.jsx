import React from 'react'
import InboxUser from '../../components/InboxUser/InboxUser'
import { PiColumnsFill } from "react-icons/pi";
import { MdTableRows } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import AICoPilot from '../AICoPilot/AICoPilot';

const users = [
    {
        id: '0',
        name: 'Luis Easton', 
        source: 'Github', 
        open: true, 
        arrivalTime: '45m', 
        message: 'Hey, I have a question', 
        color: 'bg-purple-700'  
    },
    {
        id: '1',
        name: 'Ivan', 
        source: 'Nike', 
        open: false, 
        arrivalTime: '30m', 
        message: 'Hi, there I have a question', 
        color: 'bg-red-700'
    },
    {
        id: '2',
        name: 'Lead', 
        source: 'from New York', 
        open: false, 
        arrivalTime: '40m', 
        message: 'Good Morning, let me', 
        color: 'bg-purple-700'  
    },
    {
        id: '3',
        name: 'Booking API problems', 
        source: 'Bug Report', 
        open: true, 
        arrivalTime: '45m', 
        message: 'Luis: small crafts', 
        color: 'bg-black'  
    },
    {
        id: '4',
        name: 'Miracle', 
        source: 'Exemplary Bank', 
        open: true, 
        arrivalTime: '45m', 
        message: 'Hey there, I am here to', 
        color: 'bg-gray-700'  
    }
]

const Inbox = (props) => {
   const {openChats, setOpenChats} = props 
  return (
    <div className={`h-screen w-full bg-neutral-50 p-5 border-1 border-gray-200 ${openChats ? 'md:hidden' :'md:w-[50%]'} lg:w-1/3`}>
        <h1 className='text-[#121212] text-3xl font-semibold h-1/10 border-b-1 border-b-gray-100 mb-2'>Your inbox</h1>
        
        <div className='h-8/10'>
            <div className='flex items-center justify-between'>
                <button className='text-black text-md font-semibold flex items-center'>5 open<MdKeyboardArrowDown/></button> 
                <button className='text-black text-md font-semibold flex items-center'>Waiting longest<MdKeyboardArrowDown/></button> 
            </div>
            <ul className='w-full'>
                {users.map(each => <InboxUser key={each.id} user={each} setOpenChats={setOpenChats} />)}
            </ul>   
        </div>
        <div className='inline-block shadow-xl rounded-2xl p-1'>
            <button className='bg-gray-200 p-2 rounded-lg'><PiColumnsFill/></button>
            <button className='p-2'><MdTableRows/></button>
        </div>
    </div>
  )
}

export default Inbox