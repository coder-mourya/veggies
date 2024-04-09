import React from 'react';
import "../assets/styles/footer.css"
import "../assets/styles/colors.css"
import img1 from "../assets/Images/footer/img1.png";
import img2 from "../assets/Images/footer/img2.png";
import img3 from "../assets/Images/footer/img3.png";

const Banner = () => {
    return (
        <div className="flex items-center justify-center outer mt-0">
            
            <div className="w-4/5 banner p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
                    <div className='flex justify-center banner-items'>
                        <div className='img-container flex justify-center items-center rounded-full circale border-4 border-[#67B208] h-24 w-24'>
                            <img src={img1} alt="pick" className=" h-12 w-10" />
                        </div>

                        <div className='text-start ml-4'>
                            <h1>Build mode</h1>
                            <p>in progress</p>
                        </div>
                    </div>

                    <div className='flex justify-center banner-items'>
                        <div className='img-container flex justify-center items-center rounded-full circale border-4 border-[#67B208] h-24 w-24'>
                            <img src={img2} alt="pick" className=" h-12 w-10" />
                        </div>

                        <div className='text-start ml-4'>
                            <h1>Prototype mode</h1>
                            <p>coming soon</p>
                        </div>
                    </div>

                    <div className='flex justify-center banner-items'>
                        <div className='img-container flex justify-center items-center rounded-full circale border-4 border-[#67B208] h-24 w-24'>
                            <img src={img3} alt="pick" className=" h-12 w-10" />
                        </div>
                        <div className='text-start ml-4'>
                            <h1>Launch</h1>
                            <p>coming soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
