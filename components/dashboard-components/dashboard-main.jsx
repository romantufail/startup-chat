import React from 'react'
import DashboardHeader from './dashboard-header'

function DashboardMain({ children }) {
    return (
        <div className='flex-1'>
            <DashboardHeader />
            <main className='px-12 py-6'>
                {children}
            </main>
        </div>
    )
}

export default DashboardMain