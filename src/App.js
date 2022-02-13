import './App.css';
import Clock from './components/clock/clock';
import Lapse_box from './components/lapse_box/lapse_box';
import {useState,useRef} from 'react'
import './bulma.css'


function App() {
  const [lapse_array,set_lapse_array] = useState([])
  const [second,set_second] = useState(0)
  const minuteRef = useRef(0);
  const hourRef = useRef(0);
  const intervalId = useRef(false);
  function start_timer(){
    intervalId.current=setInterval(function(){
      let minute_once = true;
      set_second(prevSecond=>{
        if(prevSecond<59){
          return prevSecond+1;
        }
        else{
          if(minuteRef.current<59){
            minute_once&&minuteRef.current++;
            minute_once = false;
          }
          else{
            minuteRef.current=0;
            if(hourRef.current<59){
              hourRef.current++;
            }
            else{
              hourRef.current=0;
            }
          }
          return 0;

        }

      })
    },1000)
  }
  function stop_timer(){
    clearInterval(intervalId.current)
  }
  function reset_timer(){
    clearInterval(intervalId.current)
    minuteRef.current = 0;
    hourRef.current = 0;
    set_second(0);
    set_lapse_array([])

  }
  function lapse_timer(){  
    let current_time = `${hourRef.current<10?'0'+hourRef.current:hourRef.current}:${minuteRef.current<10?'0'+minuteRef.current:minuteRef.current}:${second<10?'0'+second:second}`
    let new_lapse_array = [...lapse_array];
    new_lapse_array.push(current_time);

    set_lapse_array(new_lapse_array)
  }
  function delete_lapse(index){
    let current_lapse_arr = [...lapse_array]
    current_lapse_arr.splice(index,1)
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
