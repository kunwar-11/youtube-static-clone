import React from 'react'
import '../styles/Sidebar.css'
import {Home , Whatshot , Subscriptions , VideoLibrary , History , OndemandVideo , WatchLater , ThumbUp , ExpandMore} from '@material-ui/icons'
import SidebarRow from './SidebarRow'
import { NavLink } from 'react-router-dom'
function Sidebar({isSideBar}) {
    return (
        <div className  = {`sidebar ${isSideBar ? 'sidebar-active' : ''}`}>
            <NavLink to = '/' activeClassName = 'selected'>
                <SidebarRow selected Icon = {Home} title = 'Home'/>
            </NavLink>
            <NavLink to = '/trending' activeClassName = 'selected'>
                <SidebarRow Icon = {Whatshot} title = 'Trending'/>
            </NavLink>
            <SidebarRow Icon = {Subscriptions} title = 'Subscription'/>
            <hr/>
            <SidebarRow  Icon = {VideoLibrary} title = 'Library'/>
            <SidebarRow Icon = {History} title = 'History'/>
            <SidebarRow Icon = {OndemandVideo} title = 'Your Videos'/>
            <SidebarRow  Icon = {WatchLater} title = 'Watch Later'/>
            <SidebarRow Icon = {ThumbUp} title = 'Liked Videos'/>
            <SidebarRow Icon = {ExpandMore} title = 'Show More'/>
        </div>
    )
}

export default Sidebar
