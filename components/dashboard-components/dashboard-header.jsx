import React from 'react'
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb"
import { IoNotificationsSharp } from "react-icons/io5"
import { AiFillSetting } from "react-icons/ai"
function DashboardHeader() {
    return (
        <header className='w-full min-h-[70px] shadow-lg flex justify-between items-center px-12'>
            <TbLayoutSidebarLeftCollapse size="24" className='cursor-pointer text-secondary-100 hover:text-primary-800' />
            <div className='flex items-center gap-4'>
                <IoNotificationsSharp size="24" className='cursor-pointer text-secondary-100 hover:text-primary-800' />
                <AiFillSetting size="24" className='cursor-pointer text-secondary-100 hover:text-primary-800' />
                <div className='flex items-center gap-2 px-4 py-[6px] border rounded-3xl hover:bg-primary-100 cursor-pointer border-primary-100 border-solid '>
                    <div className='max-w-[30px]'>
                        {/* eslint-disable-next-line */}
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.lI6jPe1jEAv9oU5dr9onZgHaHa&pid=Api&P=0"
                            alt="profile"
                            width="100%"
                            className='rounded-full'
                        />
                    </div>
                    <h4>Andreana</h4>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader