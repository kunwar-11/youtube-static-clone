import React , {useState , useEffect} from 'react'
import {Menu , Search , VideoCallSharp , Apps , Notifications , Clear} from '@material-ui/icons'
import { Avatar } from '@material-ui/core';
import {  Link } from "react-router-dom";
import '../styles/Header.css'
function Header({setIsSideBar , isSideBar}) {
    const [width, setWidth] = useState(window.innerWidth);
    const [input , setInput] = useState('');
    useEffect(() => {
        window.addEventListener('resize' , updateWidth);
        return () => {
            window.removeEventListener('resize' , updateWidth);
        }
    })
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    return (
        <div className = 'header'>
            <div className="header__left">
                {isSideBar ? <Clear className = 'header__menu' onClick = {() => setIsSideBar(!isSideBar)} /> : <Menu className = 'header__menu' onClick = {() => setIsSideBar(!isSideBar)}/>}
                <img className = 'header__logo' src={`${width > 543? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" : "https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png"}`} alt="youtube logo"/>
            </div>
            <div className="header__input">

                    <input onChange = {(e) => setInput(e.target.value)} value = {input} className = 'input' type="text" placeholder = 'search'/>
                    <Link to = {`/search/${input}`}>
                        <Search className = 'header__searchIcon'/>
                    </Link>
            </div>
            <div className="header__icons head">
                <VideoCallSharp className = 'header__icon'/>
                <Apps className = 'header__icon'/>
                <Notifications className = 'header__icon'/>
                <Avatar className = 'header__usericon header__icon' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAnFqxFQTCRdA-s17B7P74B7TOX69QDrwTA&usqp=CAU" alt = "my logo" />
            </div>

        </div>
    )
}

export default Header
