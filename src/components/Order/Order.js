import "../css/main.css";
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../css/util.css";
import axios from "axios";
import {useState} from "react";
import Validation from "../../Validation/Validation";

const Order = () => {

    axios.post('https://localhost:7063/api/Customer', {

        FirstName: "string",
        LastName: "string",
        gmail: "string",
        BrunchNumber: 0,
        Separation: "string",
        "CreatedDate": "2023-08-06T18:14:43.739Z"

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });



    const [values, setValues] = useState ({
        firtsname:'',
        lastname:'',
        postindex:'',
        email:'',
        address:'',
        separation:''
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const newObject = {...values,[event.target.username]: event.target.value}
        setValues(newObject)
    }

    function handleValidation(event){
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={handleValidation} >
                    <span className="login100-form-title">
						Order Product
					</span>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter First Name">
                            <input className="input100" type="text" name="firstname" placeholder="FirstName"  onChange={handleInput}/>
                            <span className="focus-input100"></span>
                            {errors.firstname && <p style={{color:"red"}}>{errors.firstname}</p>}
                        </div>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Last Name">
                            <input className="input100" type="text" name="lastname" placeholder="LastName" onChange={handleInput} />
                            <span className="focus-input100"></span>
                            {errors.lastname && <p style={{color:"red"}}>{errors.firstname}</p>}

                        </div>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Post Index">
                            <input className="input100" type="text" name="postindex" placeholder="Post Index" onChange={handleInput} />
                            <span className="focus-input100"></span>
                            {errors.postindex && <p style={{color:"red"}}>{errors.postindex}</p>}

                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Email">
                            <input className="input100" type="text" name="email" placeholder="Email"  onChange={handleInput}/>
                            <span className="focus-input100"></span>
                            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Address">
                            <input className="input100" type="text" name="address" placeholder="Address"  onChange={handleInput}/>
                            <span className="focus-input100"></span>
                            {errors.address && <p style={{color:"red"}}>{errors.address}</p>}

                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Separation">
                            <input className="input100" type="text" name="separation" placeholder="Separation"  onChange={handleInput}/>
                            <span className="focus-input100"></span>
                            {errors.separation && <p style={{color:"red"}}>{errors.separation}</p>}
                        </div>

                        <div className="container-login100-form-btn">
                            <a href="/crypto" className="login100-form-btn">
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