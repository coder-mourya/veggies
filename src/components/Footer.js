import React from "react";
import logo from "../assets/Images/logo.png";
import Home from "../assets/Images/home.png";
import phone from "../assets/Images/phone.png";
import mail from "../assets/Images/mail.png";
import "../assets/styles/footer.css"

import { Link } from "react-router-dom";


const Footer = () => {
    return (


        <div className="container mx-auto text-black-500  ">
            <div className="flex justify-center bg-[#FFEFE6] py-10">

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="info w-full md:w-1/4 mb-8 md:mb-0  ">
                        <ul className="pl-[4rem]" >
                            <li className="flex items-center">
                                <img src={logo} alt="footer logo" className="mr-2 w-auto h-auto max-w-[100%]" />
                            </li>
                            <li className="flex items-center mt-4">
                                <img src={Home} alt="home" className="w-6 h-6 mr-2" />
                                <span>11-03 PLQ 1, Paya Lebar Quarter <br /> Singapore 408533</span>
                            </li>
                            <li className="flex items-center mt-4">
                                <img src={mail} alt="mail" className="w-6 h-6 mr-2" />
                                <span>info@sportsnerve.com</span>
                            </li>
                            <li className="flex items-center mt-4">
                                <img src={phone} alt="phone" className="w-6 h-6 mr-2" />
                                <span>+65 7979797972</span>
                            </li>
                        </ul>
                    </div>
                    <div className="importantLinks w-full md:w-1/4 mb-8 md:mb-0  pl-[4rem]">
                        <h5 className="font-bold text-lg">Important Links</h5>
                        <ul className="mt-4 ">
                            <li><Link to={"/About"}>About us</Link></li>
                            <li><Link to={"/Features"}>Features</Link></li>
                            <li><Link to={"/FAQ"}>FAQ's</Link></li>
                            <li><Link to={"/Testimonials"}>Testimonials</Link></li>
                            <li><Link to={"/Contact-us"}>Contact-us</Link></li>
                        </ul>
                    </div>
                    <div className="subscribe w-full md:w-[40%] p-[4rem] ">

                        <div className="box bg-[#3E2C34] text-white p-5 rounded-lg relative ">
                            <h2 className="text-lg font-bold mb-2">Subscribe For More info</h2>
                            <p className="mb-4">Please subscribe for more latest information.</p>
                            <div className="relative">
                                <input
                                    style={{ borderRadius: '8px' }}
                                    type="text"
                                    placeholder="Enter your email id"
                                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                                />
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md absolute right-0 mt-2">Subscribe</button>
                            </div>
                        </div>
                        <div className="footer-links text-center md:text-right mt-5">
                            <a href="https://play.google.com/store/apps/details?id=com.sportsnerve.usersapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 md:mr-3">Download on Play Store</button>
                            </a>
                            <a href="https://apps.apple.com/us/app/sports-nerve/id6468219398" target="_blank" rel="noopener noreferrer">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">Download on App Store</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-bottom flex justify-between items-center bg-[#FFBE99] p-5">
                <p className="text-sm">&copy; 2024. All rights reserved.</p>
                <ul className="flex">
                    <li className="mr-3"><i className="fab fa-facebook"></i></li>
                    <li className="mr-3"><i className="fab fa-twitter"></i></li>
                    <li className="mr-3"><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                </ul>
            </div>
        </div>

    );
};

export default Footer;
