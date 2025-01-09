import {useParams} from "react-router-dom";
import psl from "../PlaystationListener/PlaystationListener";
import {pslist} from "../../../helpers/PlaystationList";
const PLaystationListener = () => {
    const {id} = useParams();
    const selectedPS = pslist[id];


    console.log(psl);
    return(
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{selectedPS?.title}</h1>

                    <img src={selectedPS?.img} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{selectedPS?.skills}</p>
                        <p>{selectedPS?.price}</p>
                    </div>
                    <div className="container-login100-form-btn">
                        <a href="/order" className="txt3">
                            Order now
                        </a>
                    </div>

                </div>
            </div>
        </main>
    )
}

export  default  PLaystationListener;