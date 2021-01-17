import React from 'react'
import '../styles/SidebarRow.css'
function SidebarRow({selected , Icon , title}) {
    return (
        <div className = {`sidebarRow ${selected ? 'select' : ''}`}>
            <Icon className = 'sidebarRow__icon' />
            <h3 className = 'sidebarRow__title'>{title}</h3>
        </div>
    )
}

export default SidebarRow
