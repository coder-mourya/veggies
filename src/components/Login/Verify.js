
import React from 'react';
import "../../assets/styles/LoginProcess.css";

import { useNavigate } from "react-router-dom";





const Verification = () => {

    const navigate = useNavigate();

    const handleVerification = () => {

        navigate("/Register");
    }
    return (
        <div className="ForgotPassword container-fluid">
            <div className="blur-background"></div>

            <div className="container-right">
                <div className="container">
                    <div className='ml-5 login-text mt-5'>
                        <h1 className="mb-3">OTP verification</h1>

                        <p>We have sent 4-digit OTP on your registered
                            mobile number</p>
                    </div>
                    <div className="p-6">
                        <form>
                            <div className="mb-3">

                                <p className='text-green-500 mb-8'>Change number</p>

                                <div className="input-group my-1">

                                    <input
                                        type="text"
                                        className="form-control  rounded border-l py-5 "
                                        id="otp"
                                        aria-describedby="otp"
                                        placeholder="Enter OTP"

                                    />
                                </div>

                                <p className='mt-8'>Resend OTP in <span className='text-green-500'>43sec</span></p>
                            </div>
                            <button type="submit" className=" rounded py-3 login-botton mt-4" onClick={handleVerification}>Verify</button>


                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Verification;
