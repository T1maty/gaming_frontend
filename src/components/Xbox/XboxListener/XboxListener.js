import {useParams} from "react-router-dom";
import xboxl from "./XboxListener";
import {xboxlist} from "../../../helpers/XboxList";
const XboxListener = () => {
    const {id} = useParams();
    const selectedXbox = xboxlist[id];


    console.log(xboxl);
    return(
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{selectedXbox.title}</h1>

                    <img src={selectedXbox.img} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{selectedXbox.skills}</p>
                        <p>{selectedXbox.price}</p>
                    </div>
                     <div>

                      </div>

                </div>
            </div>
        </main>
    )
}

export  default  XboxListener;