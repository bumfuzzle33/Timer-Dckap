import './app.css';
import Anime from 'react-anime'
import Clock from './components/clock/clock';
import Lapse_box from './components/lapse_box/lapse_box';
import {useState,useRef} from 'react'
import './bulma.css'

function App() {
  const [second,set_second] = useState(0)
  const is_start_timer = useRef(false)
  const minuteRef = useRef(0);
  const hourRef = useRef(0);
  function start_timer(){
    setInterval(()=>{
      if(is_start_timer){
        let min_once = true;

        set_second(prevCount=>{

          if(prevCount===59){
            min_once&&minuteRef.current++;
            min_once=false;
            if(minuteRef.current===59){
              minuteRef.current=0;
              hourRef.current++;
              if(hourRef.current===59)
                hourRef.current = 0;
            }
            return 0;
  
          }
          return prevCount+1;
        })
      }
      
      
    },100);
  }
  
  return (
    <div className="App">
      <div className="tile is-ancestor">
          <div className="tile is-9 is-parent is-vertical">
            
            {/* here figures */}
            <div className="tile is-parent">
              <div id="clocksess_container"  className="tile is-child">
              <Clock
                  radius={80}
                  pointer_color="skyblue"
                  angle={hourRef.current*6}
                  number={hourRef.current}
                  time_format="Hour(s)"
                
                />
                <Clock
                  radius={80}
                  pointer_color="skyblue"
                  angle={minuteRef.current*6}
                  number={minuteRef.current}
                  time_format="Min(s)"
                
              />
              <Clock
                  radius={80}
                  pointer_color="skyblue"
                  angle={second*6}
                  number={second}
                  time_format="Second(s)"
                
                />
              {/* </div> */}
                
              </div>
              

            </div>
            {/* here the button */}
            <div className="tile is-parent">
              <div id="button_container" className="tile is-child">
                <button onClick={()=>start_timer()} className="button is-success is-medium">Start</button>
                <button  className="button is-danger is-medium">Stop</button>
                <button className="button is-warning is-medium">Reset</button>
                <button className="button is-info is-medium">Lapse</button>
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
