import React from 'react'
import {Avatar} from '@material-ui/core'
import '../styles/Videocard.css'
function Videocard({thumbnail , image , title , channel , views , timeStamp}) {
    return (
        <div className = "videocard">
            <img src={thumbnail} alt=""/>
            <div className="videocard__details">
                <div className="videocard__avatar">
                <Avatar src = {image} />
                </div>
                <div className="videocard__videodetails">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timeStamp}
                </p>
                </div>             
            </div>
        </div>
    )
}

export default Videocard
