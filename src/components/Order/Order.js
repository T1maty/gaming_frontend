import "../css/main.css";
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../css/util.css";
import axios from "axios";
import {useState} from "react";

const Order = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" >
                    <span className="login100-form-title">
						Order Product
					</span>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter First Name">
                            <input className="input100" type="text" name="firstname" placeholder="FirstName" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Last Name">
                            <input className="input100" type="text" name="lastname" placeholder="LastName" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Post Index">
                            <input className="input100" type="text" name="postindex" placeholder="Post Index" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Email">
                            <input className="input100" type="text" name="email" placeholder="Email" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Address">
                            <input className="input100" type="text" name="address" placeholder="Address" />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <a href="/complete-order" className="login100-form-btn">
                                Complete Order
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default  Order;