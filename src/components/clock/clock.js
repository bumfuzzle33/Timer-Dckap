import './clock.css'
import {useState,useEffect} from 'react'

const Clock = ({radius,pointer_color,time,time_format})=>{
    useEffect(()=>{
        
    },[])
    const clock_container_style = {
        height:`${radius*2}px`,
        width:`${radius*2}px`
    }
    console.log('reel',time)
    const pointer_style = {
        backgroundColor:`${pointer_color}`,
        transform: `rotateZ(${time*6}deg) translate(-50%,0)`,
        transformOrigin:`0px ${radius}px`,
    }
   
    return(
        <div >
            <div style={clock_container_style} className="clock_container">
                <div style={pointer_style} className='pointer'></div>
                <div className="display_num">
                    <h6 className="time_dis"><span>{time<10?"0"+time:time}</span><br/>{time_format}</h6>
                </div>
            </div>
            
        </div>
    )
}

export default Clock;