import { Col, Row } from 'antd'
import React from 'react'
import DashboardMain from '../components/dashboard-components/dashboard-main'
import DashboardSidebar from '../components/dashboard-components/dashboard-sidebar'

function DashboardLayout({ children }) {
    return (
        <div className='flex'>
            <DashboardSidebar />
            <DashboardMain>
                {children}
            </DashboardMain>
        </div>
    )
}
export default DashboardLayout