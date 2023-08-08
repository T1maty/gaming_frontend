import "../css/main.css";

import "../css/util.css";
import psL from "./PlaystationListener/PlaystationListener";
import {pslist} from "../../helpers/PlaystationList";
import Playstation from "./Playstation";


const Playstations  = () => {
    return(

        <main className="section">
            <div className="container">
                <h2 className="title-1">PLAYSTATION PRODUCTS</h2>
                <h2> <a href="/addproduct" className="txt3">
                    ADD PRODUCT
                </a></h2>

                <ul className="projects">
                    {pslist.map((psL, index) => {
                        return(
                            <Playstation
                                key={index}
                                title={psL.title}
                                img={psL.img}
                                index={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>

    )
}

export default Playstations;