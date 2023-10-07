import "../css/main.css"
import axios from "axios";
import {useState} from "react";
import Validation from "../../Validation/Validation";

const Register = () => {

    const [gmail, Setgmail] = useState("");
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");


    const configuration = {
        method:"post",
        url:"https://localhost:7063/api/Auth/register",
        data:{
            gmail,
            username,
            password,
        },
    };

    function SendRequest() {
    axios(configuration)

        .then((result) => {console.log(result);})
        .catch((error) => {console.log(error);})
    }


   // const [values, setValues] = useState({
      //  username:'',
       // password:''
   // })


    //const  [errors,setErrors] = useState({})
   // function handleInput(event) {
      //  const newObject  = {...values, [event.target.username]: event.target.value}
      //  setValues(newObject)
   // }

 //   function handleValidation(event) {
       // event.preventDefault();
      //  setErrors(Validation(values));
   // }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" >
                    <span className="login100-form-title">
						Sign Up
					</span>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter E-mail">
                            <input className="input100" type="text" name="gmail" value={gmail} onChange={(e) => Setgmail((e.target.value))} placeholder="E-mail" />
                            <span className="focus-input100"></span>

                        </div>

                        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                            <input className="input100" type="text" name="username"  value={username} onChange={(e) => SetUsername((e.target.value))} placeholder="Username"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Please enter password">
                            <input className="input100" type="password" name="pass"   value={password} onChange={(e) => SetPassword((e.target.value))} placeholder="Password" />
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
                            <button className="login100-form-btn" onClick={SendRequest}>
                                Sign up
                            </button>
                        </div>

                        <div className="flex-col-c p-t-170 p-b-40">
                        <span className="txt1 p-b-9">
							Have an account?
						</span>

                            <a href="/authorization" className="txt3">
                                Sign in now
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;