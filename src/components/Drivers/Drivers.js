import "../css/main.css";
import {useEffect} from "react";
import axios from "axios";
import alex from "../img/f1/alex.jpg";
import alonso from "../img/f1/alonso.jpg";
import bottas from "../img/f1/bottas.jpg";
import carlos from "../img/f1/carlos.jpg";
import daniel from "../img/f1/daniel.jpg";
import george from "../img/f1/george_russell.png";
import hamilton from "../img/f1/hamilton.jpg";
import lance from "../img/f1/lance.jpg";
import lando from "../img/f1/lando.jpg";
import latifi from "../img/f1/latifi.jpg";
import leclerc from "../img/f1/leclerc.jpg";
import max from "../img/f1/maxverstappen.jpg";
import mick from "../img/f1/mick.jpg";
import perez from "../img/f1/perez.jpg";
import pierre from "../img/f1/pierre.jpg";
import sebastian from "../img/f1/sebastian.jpeg";
import yuki from "../img/f1/yuki.jpg";
import kevin from "../img/f1/kevin.jpg";


const Drivers = () => {

    useEffect(() => {
        axios.get("https://localhost:7063/api/Drivers")
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
            })
    }, [])

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">F1 Drivers</h2>


                <ul className="projects">

                    <li className="project">
                        <a href="./xbox.html">
                            <img src={max}  alt="Project img" className="project__img"/>
                            <h3 className="project__title">Max Verstappen </h3>
                        </a>
                    </li>

                    <li className="project">
                        <a href="./xbox.html">
                            <img src={perez} alt="Project img" className="project__img"/>
                            <h3 className="project__title">Sergio Perez </h3>
                        </a>
                    </li>


                    <li className="project">
                        <img src={carlos} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Carlos Sainz</h3>
                    </li>



                    <li className="project">
                        <img src={leclerc} alt="Project img" className="project__img"/>
                        <h3 className="project__title"> Charles Leclerc  </h3>
                    </li>

                    <li className="project">
                        <img src={pierre} alt="Project img" className="project__img"/>
                        <h3 className="project__title"> Piere Gasly </h3>
                    </li>

                    <li className="project">
                        <img src={yuki} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Yuki Tsunoda  </h3>
                    </li>

                    <li className="project">
                        <img src={lando} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Lando Norris </h3>
                    </li>

                    <li className="project">
                        <img src={daniel} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Daniel Ricciardo </h3>
                    </li>

                    <li className="project">
                        <img src={mick} alt="Project img" className="project__img"/>
                        <h3 className="project__title"> Mick Schumacher </h3>
                    </li>

                    <li className="project">
                        <img src={kevin} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Kevin Magnussen </h3>
                    </li>

                    <li className="project">
                        <img src={lance} alt="Project img" className="project__img"/>
                        <h3 className="project__title"> Lance Stroll </h3>
                    </li>

                    <li className="project">
                        <img src={bottas} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Valtteri Bottas </h3>
                    </li>

                    <li className="project">
                        <img src={alonso} alt="Project img" className="project__img"/>
                        <h3 className="project__title"> Fernando Alonso </h3>
                    </li>

                    <li className="project">
                        <img src={sebastian} alt="Project img" className="project__img"/>
                        <h3 className="project__title"> Sebastian Vettel </h3>
                    </li>



                </ul>
            </div>
        </main>
    )
}

export  default  Drivers;