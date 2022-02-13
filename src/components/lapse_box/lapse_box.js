import './lapse_box.css'
import {MdOutlineDeleteSweep} from 'react-icons/md';

const Lapse_box = ({time,index,delete_lapse})=>{
    return(
            <div id="lapse">
                <h1>
                        #{index+1}

                </h1>
                <h2>{time}</h2>
                <div id="lapse_btn_container">
                    <button onClick={()=>delete_lapse(index)} className="button">
                        <div>
                            <MdOutlineDeleteSweep
                                size="25px"
                            />
                        </div>
                    </button>
                </div>
            </div>
    )
}

export default Lapse_box;