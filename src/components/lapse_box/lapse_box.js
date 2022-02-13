import './lapse_box.css'
import {MdOutlineDeleteSweep} from 'react-icons/md';

const Lapse_box = ()=>{
    return(
            <div id="lapse">
                <h1>
                        #1

                </h1>
                <h2>00:99:10</h2>
                <div id="lapse_btn_container">
                    <button className="button">
                        <div>
                            <MdOutlineDeleteSweep/>
                        </div>
                    </button>
                </div>
            </div>
    )
}

export default Lapse_box;