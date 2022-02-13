import './App.css';
import Clock from './components/clock/clock';
import Lapse_box from './components/lapse_box/lapse_box';
import {useState,useRef} from 'react'
import './bulma.css'


function App() {
  const [second,set_second] = useState(0)
  const minuteRef = useRef(0);
  const hourRef = useRef(0);
  const intervalId = useRef(false);
  function start_timer(){
    setInterval(function(){
      set_second(prev=>prev+1)
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

  }
  return (
    <div className="app">
      <div className="tile is-ancestor">
          <div className="tile is-9 is-parent is-vertical">
            
            {/* here clockss */}
            <div className="tile is-parent">
              <div id="clocksess_container"  className="tile is-child">
                {/* <Clock
                  radius={80}
                  pointer_color="skyblue"
                  time={hourRef.current}
                  time_format="Hour(s)"
                
                /> */}
                {/* <Clock
                  radius={80}
                  pointer_color="skyblue"
                  time={minuteRef.current}
                  time_format="Min(s)"
                
                /> */}
                <Clock
                  radius={80}
                  pointer_color="skyblue"
                  time={second}
                  time_format="Second(s)"
                
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
                <button className="button_lapse">Lapse</button>
              </div>
            </div>
          </div>
          {/* lapse here */}
          <div className="tile is-parent ">
              <div id="lapse_container" className="tile is-child">
                <Lapse_box/>
              </div>
          </div>
      </div>
        
        
        
    </div>
  );
}

export default App;
