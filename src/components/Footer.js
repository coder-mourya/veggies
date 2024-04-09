import React from "react";
import logo from "../assets/Images/logo.png";
import Home from "../assets/Images/home.png";
import phone from "../assets/Images/phone.png";
import mail from "../assets/Images/mail.png";
import "../assets/styles/footer.css"
import appStore from "../assets/Images/app-store.png";
import playStore from "../assets/Images/play-store.png";
import Banner from "./FooterBanner";

import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <>



            <div className="container mx-auto text-black-500 mt-0 ">
                <div className="  relative top-[5rem] mt-0">
                    <Banner />
                </div>
                <div className="flex justify-center footer-top  pt-[8rem] ">

                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="info w-full md:w-1/4 mb-8 md:mb-0  ">
                            <ul className="pl-[4rem]" >
                                <li className="flex items-center">
                                    <img src={logo} alt="footer logo" className="mr-2  h-auto w-[60%] md:w-[80%]" />
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

                        <div className="subscribe w-[90%] md:w-[40%] md:p-[4rem] ">

                            <div className="box text-white p-5 rounded-lg relative md:h-[14rem] ">
                                <h2 className="text-lg font-bold md:text-2xl mb-2">Subscribe For More info</h2>
                                <p className="mb-7">Please subscribe for more latest information.</p>
                                <div className="relative">
                                    <input
                                        style={{ borderRadius: '8px' }}
                                        type="text"
                                        placeholder="Enter your email id"
                                        className="w-full md:py-4 py-3 px-3 border border-gray-300 rounded-md"
                                    />
                                    <button className=" text-white md:py-2 py-1 px-4 mr-2 rounded-md absolute right-0 mt-2 bg-[#FF5C00]">Subscribe</button>
                                </div>
                            </div>

                            <div className="footer-links flex justify-center md:justify-end  my-10">
                                <div className="mr-3">
                                    <a href="https://play.google.com/store/apps/details?id=com.sportsnerve.usersapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-[#03061f] text-white py-2 px-4 rounded-md inline-flex items-center">
                                        <img src={playStore} alt="play store" className="mr-2" />
                                        Play Store
                                    </a>
                                </div>
                                <div>
                                    <a href="https://apps.apple.com/us/app/sports-nerve/id6468219398" target="_blank" rel="noopener noreferrer" className="bg-[#03061f] text-white py-2 px-4 rounded-md inline-flex items-center">
                                        <img src={appStore} alt="app store" className="mr-2" />
                                        App Store
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="footer-bottom flex justify-between items-center  p-5 ">
                    <div className="ml-10">

                        <p className="text-sm">&copy; 2024. All rights reserved.</p>
                    </div>

                    <div className="mr-10 list-items ">

                        <ul className="flex">
                            <li className="mr-3"><i className="fab fa-facebook"></i></li>
                            <li className="mr-3"><i className="fab fa-twitter"></i></li>
                            <li className="mr-3"><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
