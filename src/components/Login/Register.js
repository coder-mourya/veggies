
import React from 'react';
import "../../assets/styles/LoginProcess.css";
import { useNavigate} from "react-router-dom";



const Register = () => {

    const navigate = useNavigate();

    const handleRegister = () => {

        navigate("/Vegetables");
    }


    return (
        <div className="ForgotPassword container-fluid">
            <div className="blur-background"></div>

            <div className="container-right">
                <div className="container">
                    <div className='ml-5 login-text mt-5'>
                        <h1 className="mb-3">Welcome to veggie express</h1>

                        <p>Please fill some basic information to procceed.</p>
                    </div>
                    <div className="p-6">
                        <form>
                            <div className="mb-3">



                                <div className="input-group my-5">

                                    <input
                                        type="text"
                                        className="form-control  rounded border-l py-5 "
                                        id="name"
                                        aria-describedby="Name"
                                        placeholder="First Name"

                                    />
                                </div>

                                <div className="input-group my-5">

                                    <input
                                        type="text"
                                        className="form-control  rounded border-l py-5 "
                                        id="Last name"
                                        aria-describedby="Last Name"
                                        placeholder="Last Name"

                                    />
                                </div>

                                <div className="input-group my-5">

                                    <input
                                        type="email"
                                        className="form-control  rounded border-l py-5 "
                                        id="email"
                                        aria-describedby="email"
                                        placeholder="Email Address"

                                    />
                                </div>


                                <div className="input-group my-5">

                                    <input
                                        type="text"
                                        className="form-control  rounded border-l py-5 "
                                        id="location"
                                        aria-describedby="location"
                                        placeholder="Enter Your Location"

                                    />
                                </div>


                                <div className="input-group my-5">

                                    <input
                                        type="text"
                                        className="form-control  rounded border-l py-5 "
                                        id="poBox"
                                        aria-describedby="po box"
                                        placeholder="Enter your PO Box code"

                                    />
                                </div>


                            </div>
                            <button type="submit" className=" rounded py-3 login-botton mt-4" onClick={handleRegister}>Start shoping</button>


                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;
