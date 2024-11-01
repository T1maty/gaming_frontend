import "../css/main.css";

import "../css/util.css";
//import XboxListener from "./XboxListener/XboxListener";
import {xboxlist} from "../../helpers/XboxList";
import Xbox from "./Xbox";


const Xboxes  = () => {
    return(

        <main className="section">
        <div className="container">
            <h2 className="title-1">XBOX PRODUCTS</h2>
          <h2> <a href="/addproduct" className="txt3">
               ADD PRODUCT
            </a></h2>

            <ul className="projects">
                {xboxlist.map((xboxl, index) => {
                    return(
                      <Xbox
                      key={index}
                      title={xboxl.title}
                      img={xboxl.img}
                      index={index}
                      />
                    );
                })}
            </ul>
        </div>
    </main>

    )
}

export default Xboxes;