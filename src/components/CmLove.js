import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "../assets/styles/Cmlove.css";
import "../assets/styles/Allfonts.css";
import "../assets/styles/colors.css";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import left from "../assets/Images/cmLove/left-arow.png";
import right from "../assets/Images/cmLove/right-arow.png";
import userIcon from "../assets/Images/cmLove/usericon.png";
import  {Review} from "../assets/Dummydata/dummyData";
// import user1 from "../assets/Images/cmLove/user1.png";
// import user2 from "../assets/Images/cmLove/user2.png";
// import user3 from "../assets/Images/cmLove/user3.png";




const Love = () => {

  const owlCarouselRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulate fetching data from an API  
    setData(Review);
  };

  
  const handleNextButtonClick = () => {
    if (owlCarouselRef && owlCarouselRef.current) {
      owlCarouselRef.current.next();
    }
  };
  
  const handlePrevButtonClick = () => {
    if (owlCarouselRef && owlCarouselRef.current) {
      owlCarouselRef.current.prev();
    }
  };

// user images 
  // const userImages = [user1, user2, user3];

  
  const breakpoints = {
    0: { items: 1 },
    600: { items: 2 },
    1200: { items: 3 },
  };


  return (
    <div className="container mb-[5rem] mt-[5rem] CmLove ">
      <div className="container my-5">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center w-[90%] pt-5">
            <div className="col-span-2 md:col-span-2 loveInfo text-left">
              <h1 className="allFonts">
                15k+ <strong> Customers Love</strong>
              </h1>
              <p className="allFonts-p">
                Stay up-to-date with the latest matches, tournaments, and competitions across a multitude of sports. From international championships to local leagues, our app ensures you never miss a moment of the action.
              </p>
            </div>
            <div className="md:col-span-1 text-right flex justify-end">
              <button className="btn round-button mx-2" onClick={handleNextButtonClick}><img src={left} alt="left" /></button>
              <button className="btn round-button mx-2" onClick={handlePrevButtonClick}><img src={right} alt="right" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid cards-container">
        <div className="cardsAnimat">
          {data.length > 0 && (
            <OwlCarousel
              className="owl-theme"
              items={3}
              loop
              autoplay={true}
              autoplayTimeout={2000}
              smartSpeed={3000}
              margin={15}
              center={true}
              responsive={breakpoints}
              dots={false}
              ref={owlCarouselRef}
            >
              {data.map((item) => (
                <div key={item.id} className="cards">
                  <div className="user flex">
                    <div className="col-3">

                    <img src={item.image} 
                    alt={item.nam}
                     className="card-pick" />

                    </div>
                    <div className="col-6 text-left">
                      <h5>{item.name}</h5>
                      <p>{item.role}</p>
                    </div>
                    <div className="col-3">
                      <img src={userIcon} alt="user icon" className="cards-pick" />
                    </div>
                  </div>
                  <div className="userAbout text-left">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}

        </div>
      </div>
    </div>
  );
};

export default Love;
