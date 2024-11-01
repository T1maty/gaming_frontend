import "../css/main.css";
import "../css/util.css";
//import Navbar from "../Navbar/Navbar";
//import Footer from "../Footer/Footer";
//import axios, {Axios} from "axios";
//import {AxiosResponse} from "axios";

const Crypto = () => {
    axios.post('https://localhost:7063/api/Crypto/transfer', {
        walletnumber: "string",
        transferamount: "string"
    })
       // .then(function (response: AxiosResponse <any>) {
          //  console.log(response);
        //})
        //.catch(function (error) {
          //  console.log(error);
        //});
    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span className="login100-form-title">
						TRANSACTION
					</span>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Cryptowallet">
                            <input className="input100" type="text" name="username" placeholder="Number Cryptowallet"/>
                                <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Please enter Amount">
                            <input className="input100" type="password" name="pass" placeholder="Amount"/>
                                <span className="focus-input100"></span>
                        </div>

                        <div className="text-right p-t-13 p-b-23">

                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Send
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export  default  Crypto;