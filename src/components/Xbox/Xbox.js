import "../css/main.css";
import Navbar from "../Navbar/Navbar";
import xboxss from "../img/xboxss.jpeg";
import gamepadx from "../img/gamepadx.jpg";
import gamepass from "../img/gamepass.jpg";
import xboxx from "../img/xboxX.png";
import Footer from "../Footer/Footer";

const Xbox  = () => {
    return(

        <main className="section">
        <div className="container">
            <h2 className="title-1">XBOX PRODUCTS</h2>
            <h2 className="title-1"><a href="addproduct.html"/> ADD PRODUCT</h2>

            <ul className="projects">

                <li className="project">
                    <a href="./xbox.html">
                        <img src={xboxss}  alt="Project img" className="project__img"/>
                            <h3 className="project__title">XBOX SERIES S NEW! </h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./xbox.html">
                        <img src={gamepadx} alt="Project img" className="project__img"/>
                            <h3 className="project__title">XBOX SERIES X GAMEPAD NEW! </h3>
                    </a>
                </li>


                <li className="project">
                    <img src={gamepass} alt="Project img" className="project__img"/>
                        <h3 className="project__title">XBOX GAMEPASS Ultimate</h3>
                </li>
                <li className="project">
                    <img src={xboxx} alt="Project img" className="project__img"/>
                        <h3 className="project__title">XBOX SERIES X + GAMEPASS </h3>
                </li>

            </ul>
        </div>
    </main>

    )
}

export default Xbox;