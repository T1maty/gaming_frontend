import "../css/main.css";
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../css/util.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";


const Authorization = () => {
    axios.post('https://localhost:7063/api/Auth/register', {

        username: "string",
        password: "string"

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span className="login100-form-title">
						Sign In
					</span>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input className="input100" type="text" name="username" placeholder="Username"/>
                                <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Please enter password">
                            <input className="input100" type="password" name="pass" placeholder="Password"/>
                                <span className="focus-input100"></span>
                        </div>

                        <div className="text-right p-t-13 p-b-23">
                        <span className="txt1">
							Forgot
						</span>

                            <a href="#" className="txt2">
                                Username / Password?
                            </a>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Sign in
                            </button>
                        </div>

                        <div className="flex-col-c p-t-170 p-b-40">
                        <span className="txt1 p-b-9">
							Don’t have an account?
						</span>

                            <a href="/register" className="txt3">
                                Sign up now
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Authorization;