import './App.css';
import Clock from './components/clock/clock';
import Lapse_box from './components/lapse_box/lapse_box';
import {useState,useRef,useEffect} from 'react'
import './bulma.css'


function App() {
  const [is_start,set_is_start] = useState(false)
  const [lapse_array,set_lapse_array] = useState([])
  const [second,set_second] = useState(0)
  const minuteRef = useRef(0);
  const hourRef = useRef(0);

  useEffect(()=>{
    if(sessionStorage['sessionTime']){
      const sessionTime = JSON.parse(sessionStorage.getItem('sessionTime'))
      hourRef.current = sessionTime.hour;
      minuteRef.current = sessionTime.minute;
      set_second(sessionTime.second)
    }
    if(sessionStorage['sessionLapse']){
      const sessionLapse = JSON.parse(sessionStorage.getItem('sessionLapse'))
      set_lapse_array(sessionLapse)
    }

  },[])
  const intervalId = useRef(false);
  function start_timer(){
    if(!is_start){
      intervalId.current=setInterval(function(){
        let minute_once = true;
        set_second(prevSecond=>{
          let newSecond = 0;
          
          if(prevSecond<59){
            newSecond = prevSecond+1;
          }else{
            if(minuteRef.current<59){
              minute_once&&minuteRef.current++;
              minute_once = false;
            }else{
              minuteRef.current=0;
              if(hourRef.current<59){
                hourRef.current++;
              }else{
                hourRef.current=0;
              }
            }
  
          }
          sessionStorage.setItem('sessionTime',JSON.stringify({
            hour:hourRef.current,
            minute:minuteRef.current,
            second:newSecond
          }))
          return newSecond;
        })
      },1000)
      set_is_start(true)
    }
    // pause code
    else{
      clearInterval(intervalId.current)
      set_is_start(false)
    }  
    
  }
  function stop_timer(){
    clearInterval(intervalId.current)
    minuteRef.current = 0;
    hourRef.current = 0;
    set_second(0);
    set_is_start(false)
    sessionStorage.setItem('sessionTime',JSON.stringify({
      hour:0,
      minute:0,
      second:0
    }))
    
  }
  function reset_timer(){
    clearInterval(intervalId.current)
    minuteRef.current = 0;
    hourRef.current = 0;
    set_second(0);
    set_lapse_array([])
    set_is_start(false)
    sessionStorage.setItem('sessionTime',JSON.stringify({
      hour:0,
      minute:0,
      second:0
    }))
    sessionStorage.setItem('sessionLapse',JSON.stringify([]))


  }
  function lapse_timer(){  
    let current_time = `${hourRef.current<10?'0'+hourRef.current:hourRef.current}:${minuteRef.current<10?'0'+minuteRef.current:minuteRef.current}:${second<10?'0'+second:second}`
    let new_lapse_array = [...lapse_array];
    new_lapse_array.push(current_time);
    sessionStorage.setItem('sessionLapse',JSON.stringify([...new_lapse_array]))
    set_lapse_array(new_lapse_array)
  }
  function delete_lapse(index){
    let current_lapse_arr = [...lapse_array]
    current_lapse_arr.splice(index,1)
    sessionStorage.setItem('sessionLapse',JSON.stringify([...current_lapse_arr]))
    set_lapse_array(current_lapse_arr)
  }
  return (
    <div className="app">
      <div className="tile is-ancestor">
          <div className="tile is-9 is-parent is-vertical">
            
            {/* here clockss */}
            <div className="tile is-parent">
              <div id="clocksess_container"  className="tile is-child">
                <Clock
                  radius={80}
                  pointer_color="skyblue"
                  time={hourRef.current}
                  time_format="Hour(s)"
                
                />
                <Clock
                  radius={80}
                  pointer_color="skyblue"
                  time={minuteRef.current}
                  time_format="Min(s)"
                
                />
                <Clock
                  radius={80}
                  pointer_color="skyblue"
                  time={second}
                  time_format="Sec(s)"
                
                />
              {/* </div> */}
                
              </div>
              

            </div>
            {/* here the button */}
            <div className="tile is-parent">
              <div id="button_container" className="tile is-child">
                <button className="button_start" onClick={()=>start_timer()}>Start</button>
                <button className="button_stop" onClick={()=>stop_timer()}>Stop</button>
                <button className="button_reset" onClick={()=>reset_timer()}>Reset</button>
                <button className="button_lapse" onClick={()=>lapse_timer()}>Lapse</button>
              </div>
            </div>
          </div>
          {/* lapse here */}
          <div className="tile is-parent ">
              <div id="lapse_container" className="tile is-child">
                {
                  lapse_array.map((time,index)=>(
                    <Lapse_box key={`lapse box #${index}`}
                      time={time}
                      index={index}
                      delete_lapse={delete_lapse}
                    />
                  ))
                }
              </div>
          </div>
      </div>
        
        
        
    </div>
  );
}

export default App;
