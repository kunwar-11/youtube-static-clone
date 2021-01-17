import React from 'react'
import {Menu , Search , VideoCallSharp , Apps , Notifications} from '@material-ui/icons'
import { Avatar } from '@material-ui/core';
import '../styles/Header.css'
function Header() {
    return (
        <div className = 'header'>
            <div className="header__left">
                <Menu />
                <img className = 'header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube logo"/>
            </div>
            <div className="header__input">

                    <input className = 'input' type="text" placeholder = 'search'/>
                    <Search className = 'header__searchIcon'/>
            </div>
            <div className="header__icons">
                <VideoCallSharp className = 'header__icon'/>
                <Apps className = 'header__icon'/>
                <Notifications className = 'header__icon'/>
                <Avatar className = 'header__usericon header__icon' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAnFqxFQTCRdA-s17B7P74B7TOX69QDrwTA&usqp=CAU" alt = "my logo" />
            </div>
        </div>
    )
}

export default Header
