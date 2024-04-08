import React from "react";
import Love from "../components/CmLove";
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import SlideImg from "../assets/Images/homeIMG/home.png"
import Work from "../components/WorkInfo";
import "../assets/styles/home.css";
import Items from "../components/Items";


const Home = () => {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 600,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: true
    // };

    return (


        <>
            <div className="container ">

                <div className="container">

                {/* <Slider   {...settings} c>
                    <div>
                        <img  src={SlideImg} alt="home pick" />
                    </div>
                    <div>
                        <img    src={SlideImg} alt="home pick" />
                    </div>
                    <div>
                        <img    src={SlideImg} alt="home pick" />
                    </div>


                </Slider> */}
                </div>

                <section>
                    <Items />
                </section>

                <section>
                    <Work />
                </section>

                <section>

                    <Love />
                </section>

            </div>
        </>

    )
}

export default Home;