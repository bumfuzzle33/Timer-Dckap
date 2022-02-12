import './clock.css'

const Clock = ({radius,pointer_color,angle,number,time_format})=>{
    const clock_container_style = {
        height:`${radius*2}px`,
        width:`${radius*2}px`
    }
    let pointer_size = radius/5;
    const pointer_style = {
        height:`${pointer_size}px`,
        width:`${pointer_size}px`,
        backgroundColor:`${pointer_color}`,
        transform: `rotateZ(${angle}deg) translate(-50%,0)`,
        transformOrigin:`0px ${radius}px`,
    }
   
    return(
        <div >
            <div style={clock_container_style} className="clock_container">
                <div style={pointer_style} className='pointer'></div>
                <div className="display_num">
                    
                    <h6 className="time_dis"><span>{number<10?"0"+number:number}</span><br/>{time_format}</h6>
                </div>
            </div>
            
        </div>
    )
}

export default Clock;