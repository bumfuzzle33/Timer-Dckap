import './lapse_box.css'
import {MdOutlineDeleteSweep} from 'react-icons/md';

const Lapse_box = ()=>{
    return(
            <div id="lapse">
                <div id="lapse_text_container">
                    <h1>#2 Lapse</h1>
                    <h2>23:02:90</h2>

                </div>
                <div id="lapse_btn_container">
                    <button className="button is-danger">
                        <MdOutlineDeleteSweep/>
                    </button>
                </div>
            </div>
    )
}

export default Lapse_box;