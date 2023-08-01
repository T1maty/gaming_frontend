import "../css/main.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useEffect} from "react";
import axios from "axios";
import {urlWeather} from "../../endpoints";

const Drivers = () => {

    useEffect(() => {
        axios.get("https://localhost:7063/api/Drivers")
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
            })
    }, [])

    return (
        <div>



        </div>
    )
}

export  default  Drivers;