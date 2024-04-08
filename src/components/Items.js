import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import dummyData from "../assets/Images/items/Items.json";
import item1 from "../assets/Images/items/item1.png";
import item2 from "../assets/Images/items/item2.png";
import item3 from "../assets/Images/items/item3.png";
import item4 from "../assets/Images/items/item4.png";
import left from "../assets/Images/cmLove/left-arow.png";
import right from "../assets/Images/cmLove/right-arow.png";
import "../assets/styles/items.css"



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Items = () => {

    const [items, setItems] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const owlCarouselRef = useRef(null);



    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {

            setItems(dummyData);
            console.log(setItems)
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };


    const getImagePath = (imageName) => {
        // Map image filename to corresponding image path
        const imagePaths = {
            'item1.png': item1,
            'item2.png': item2,
            'item3.png': item3,
            'item4.png': item4
            // Add more image paths as needed
        };
        return imagePaths[imageName];
    };


    const handleOptionChange = (itemId, event) => {
        setSelectedOptions({
            ...selectedOptions,
            [itemId]: event.target.value
        });
    };

    const breakpoints = {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 3 },
        1000: { items: 4 }
    };

    //   hendlde right button 
    const handleNextButtonClick = () => {
        if (owlCarouselRef && owlCarouselRef.current) {
            owlCarouselRef.current.next();
        }
    };

    //   handle left button
    const handlePrevButtonClick = () => {
        if (owlCarouselRef && owlCarouselRef.current) {
            owlCarouselRef.current.prev();
        }
    };



    return (
        <div className='vegetables'>

            <div className='md:pl-[10rem] pl-[2rem]' >
                <h1 className='allFonts'>Our vegetables</h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-7 items-center my-10">
                <div className='flex justify-center'>
                    <button className="btn round-button mx-2 col-span-1 showutton" onClick={handleNextButtonClick}>
                        <img src={left} alt="left" />
                    </button>
                </div>
                <div className="col-span-5">
                    {items.length > 0 && (
                        <OwlCarousel
                            item = {4}
                            className="owl-theme"
                            loop
                            margin={10}
                            center={true}
                            responsive={breakpoints}
                            dots={false}
                            ref={owlCarouselRef}
                        >
                            {items.map(item => (
                                <div key={item.id} className="bg-white rounded-lg shadow crad-items md:w-[90%] w-[50%] px-4">
                                    <div className="flex items-center justify-center mb-4">
                                        <img
                                            src={getImagePath(item.itemImage)}
                                            alt={item.itemName}
                                            className="w-[50%] object-cover"
                                        />
                                    </div>
                                    <h1 className="text-xl font-semibold">{item.itemName}</h1>
                                    <p className="text-gray-600 mt-2">Price: ${item.itemPrice}</p>
                                    
                                    <select 
                                    
                                    value={selectedOptions[item.id] || ''} 
                                    onChange={(e) => handleOptionChange(item.id, e)}
                                    className='ml-3 my-3 px-[3rem] border border-gray-300 rounded'
                                    >
                                        <option value="">Roll cut</option>
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                    </select>
                                </div>
                            ))}
                        </OwlCarousel>
                    )}
                </div>
                <div className='flex justify-center'>
                    <button className="btn round-button mx-2 col-span-1 showutton" onClick={handlePrevButtonClick}>
                        <img src={right} alt="right" />
                    </button>
                </div>
            </div>


            {/* buttons for small screen  */}
            <div className='optional-butons  flex justify-center'  >

                <button className="btn round-button mx-2 col-span-1" onClick={handleNextButtonClick}>
                    <img src={left} alt="left" />
                </button>

                <button className="btn round-button mx-2 col-span-1" onClick={handlePrevButtonClick}>
                    <img src={right} alt="right" />
                </button>
            </div>
        </div>


    );
};

export default Items;
