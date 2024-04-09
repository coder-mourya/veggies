import React from "react";
import "../assets/styles/work.css"
import "../assets/styles/colors.css"
import img1 from "../assets/Images/work/1.png"
import img2 from "../assets/Images/work/2.png"
import img3 from "../assets/Images/work/3.png"
import img4 from "../assets/Images/work/4.png"



const Work = () => {

    return (

        <div className="container work   py-10 ">
            {/* Work Info */}
            <div className="flex justify-center items-center mb-8"> {/* Step 1: Center align both divs */}
                <div className="work-info">
                    <div className="text-center">
                        <h1 className="allFonts">How does it work?</h1>
                    </div>
                    <div className="text-center">
                        <p className="allFonts-p">We have 4 easy steps to deliver your fresh cut vegetables to your doorstep</p>
                    </div>
                </div>
            </div>


            <div className=" flex justify-center">
                <div className="flex flex-wrap justify-center work-picks w-[80%]" >
                    <div className="w-full md:w-1/2 lg:w-1/4  md:mt-10 sm:pb-7">
                        <img src={img1} alt="pick 1" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4  md:mb-10 sm:pb-7">
                        <img src={img2} alt="pick 2" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4  md:mt-10 sm:pb-7">
                        <img src={img3} alt="pick 3" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4  md:mb-10 sm:pb-7">
                        <img src={img4} alt="pick 4" />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Work;