import "../css/main.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ps5 from "../img/playstation5.jpg";
import ps4 from "../img/ps4slim.jpg";
import ps4pro from "../img/ps4pro.jpg";
import gamepad from "../img/ps4gamepad.jpg";
import psplus from "../img/psplus.jpg";
const Playstation = () => {
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-ps">PLAYSTATION PRODUCTS</h2>
                <h2 className="title-1"><a href="addproduct.html"/> ADD PRODUCT</h2>

                <ul className="projects">
                    <li className="project">
                        <a href="./playstation.html">
                            <img src={ps5} alt="Project img" className="project__img"/>
                                <h3 className="project__title">PLAYSTATION 5 NEW!</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./playstation.html">
                            <img src={ps4} alt="Project img" className="project__img"/>
                                <h3 className="project__title">PLAYSTATION 4 SLIM </h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./playstation.html">
                            <img src={ps4pro} alt="Project img" className="project__img"/>
                                <h3 className="project__title">PLAYSTATION 4 PRO </h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src={gamepad} alt="Project img" className="project__img"/>
                            <h3 className="project__title">PLAYSTATION 4 GAMEPAD </h3>
                    </li>
                    <li className="project">
                        <img src={psplus} alt="Project img" className="project__img"/>
                            <h3 className="project__title">PLAYSTATION PLUS 12 month </h3>
                    </li>
                </ul>
            </div>
        </main>

)
}
export default Playstation;