import React from 'react';
import "../../assets/styles/LoginProcess.css";
import {Link }from "react-router-dom";
import { useNavigate} from "react-router-dom";


const Login = () => {

        const navigate  =  useNavigate();

        const handleLogin = () =>{
            navigate("/Verification")
        }
    
    return (
        <div className="ForgotPassword container-fluid">
            <div className="blur-background"></div>

            <div className="container-right">
                <div className="container">
                    <div className='ml-5 login-text mt-5'>  
                            <h1 className="mb-3">Login With mobile number</h1>    
                    </div>
                    <div className="p-6">
                        <form>
                            <div className="mb-3">
                                
                                <div className="input-group my-1">
                                   
                                    <input
                                        type="number"
                                        className="form-control  rounded border-l py-5 "
                                        id="number"
                                        aria-describedby="number"
                                        placeholder="Enter your mobile number"
                                        
                                    />
                                </div>
                            </div>
                            <button type="submit" className=" rounded py-3 login-botton mt-4" onClick={handleLogin}>Sent OTP</button>
                            <div className='mt-4'>
                                By continuing, you agree to our{' '}
                                <Link to="/terms" className=' text-[#FF5C00]'>Terms of service</Link> &{' '}
                                <Link to="/privacy" className=' text-[#FF5C00]'>Privacy policy</Link>
                            </div>
                           
                        </form>
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default Login;
