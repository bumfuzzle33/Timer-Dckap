import './clock.css'
import {useState,useEffect} from 'react'

const Clock = ({radius,pointer_color,time,time_format})=>{
    
    const clock_container_style = {
        height:`${radius*2}px`,
        width:`${radius*2}px`
    }
    const pointer_style = {
        transform: `rotateZ(${time*6}deg) translate(-50%,0)`,
        transformOrigin:`0px ${radius}px`,
        borderBottom: `10px solid ${time>0?pointer_color:"#454646"}`,
        boxShadow:`${time>0?`0 0 15px ${pointer_color}`:"none"}`
    }
    const display_style = {
        color:`${time>0?`${pointer_color}`:"#454646"}`,
        textShadow:`${time>0?`0 0 15px ${pointer_color}`:"none"}`
    }
   
    return(
        <div >
            <div style={clock_container_style} className="clock_container">
                <div style={pointer_style} className='pointer'></div>
                <div className="display_num">
                    <h6 style={display_style} className="time_dis"><span>{time<10?"0"+time:time}</span><br/>{time_format}</h6>
                </div>
            </div>
            
        </div>
    )
}

export default Clock;