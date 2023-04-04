/**
 * @author Muhammad Shahzaib Alam
 * @since 2023
 */

import React from 'react'
import DashboardLayout from '../../layouts/dashboard'

function AgentDashboard() {
    return (
        <div>AgentDashboard</div>
    )
}

export default AgentDashboard

AgentDashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}