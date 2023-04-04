import { Button, Space } from 'antd'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { BsFillChatDotsFill } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"

const nav_links = (pathname) => [
    {
        icon: AiFillHome,
        path: `/${pathname}/`,
        text: 'Dashboard',
        is_logout_link: false,
        children: [],
        slug: 'dashboard',
        notification_icons: []
    },
    {
        icon: BsFillChatDotsFill,
        path: `/${pathname}/chat`,
        text: 'Chats',
        is_logout_link: false,
        children: [],
        slug: 'chat',
        notification_icons: [
            {
                slug: 'new_chats',
                text: "1",
                background_color: 'red',
                color: 'white',
            },
            {
                slug: 'pending_chats',
                text: "2",
                background_color: 'yellow',
                color: 'black',
            }
        ]
    },
    {
        icon: CgProfile,
        path: `/${pathname}/profile`,
        text: 'Profile',
        is_logout_link: false,
        children: [],
        slug: 'profile',
        notification_icons: []
    },
]

function DashboardSidebar() {
    const router = useRouter();
    const basePath = useMemo(() => {
        return router.pathname.split('/')?.[1] || '';
    }, [router.pathname])

    return (
        <aside
            className='bg-primary-100 py-4 fixed w-full min-h-max bottom-0 hidden
                        md:min-w-[240px] md:max-w-[240px] md:static md:min-h-[100vh] md:block '
        >
            <div className='max-h-[70px] max-w-[40%] overflow-hidden mx-auto'>
                {/* eslint-disable-next-line */}
                <img
                    src="https://www.careerz360.com/cdn.careerz360.com/Content/UserData/empr/d39b595e-eb70-424e-b048-553a0eb9d40c/profile_pics/thumbnail_4b1eb512-39e4-4e65-b38e-b5b794ae94d8.png"
                    alt="Vizz Live"
                    width="100%"
                    height="100%"
                />
            </div>
            {/* navlinks-renderer here */}

            <div className='px-4 my-12'>
                <NavlinksRenderer links={nav_links(basePath)} />
            </div>
        </aside>
    )
}

export default DashboardSidebar

// Example JSON



const NavlinksRenderer = ({ links }) => {

    return links.map((link, idx) => {
        return <div key={link.slug}>
            <button style={{cursor:"pointer"}} className='flex items-center justify-between w-full px-4 py-2 my-1 bg-transparent border-none rounded-md hover:bg-primary-800'>
                <div className='flex items-center text-md'>
                    <div className='flex items-center justify-center px-2 py-2 mr-2 bg-white rounded-sm'>
                        <link.icon size="18" className='text-primary-800' />
                    </div>
                    {link.text}
                </div>
                <div className='flex items-center h-full gap-1'>
                    {link.notification_icons.map(notification => {
                        return <div className={`rounded-full flex items-center justify-center px-1 text-xs `} style={{ background: notification.background_color, color: notification.color ,width:15}} key={notification.slug}>{notification.text}</div>
                    })}
                </div>
            </button>
        </div>
    })
}