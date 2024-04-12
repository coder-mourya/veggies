import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { dummyItems } from "../assets/Dummydata/dummyData";
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
        const fetchItems = async () => {
            try {
                // Modify item names
                const modifiedItems = dummyItems.map(item => ({
                    ...item,
                    itemName: item.itemName

                        .split('-') // Split the name by hyphens
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                        .join(' ') // Join the words back together with spaces
                        .slice(0, 10) + (item.itemName.length > 10 ? '...' : '')


                }));

                setItems(modifiedItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);



    const handleOptionChange = (itemId, event) => {
        setSelectedOptions({
            ...selectedOptions,
            [itemId]: event.target.value
        });
    };

    const breakpoints = {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 2 },
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
        <div className='vegetables mt-7'>

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
                            item={4}
                            className="owl-theme"
                            loop
                            margin={10}
                            center={false}
                            responsive={breakpoints}
                            dots={false}
                            ref={owlCarouselRef}
                        >
                            {items.map(item => (
                                <div key={item.id} className="bg-white rounded-lg shadow card-items md:w-[90%]  w-[65%] md:px-6 mx-auto mb-[5rem] md:mt-[4rem] mt-[2rem]">
                                    <div className="flex items-center justify-center mb-4">
                                        <img
                                            src={item.itemImage}
                                            alt={item.itemName}
                                            className="md:w-[50%] object-cover"
                                        />
                                    </div>
                                    <h1 className="text-xl font-semibold text-center">{item.itemName}</h1>
                                    <p className="text-gray-600 mt-2 text-center">Price: ${item.itemPrice}</p>

                                    <div className='flex justify-center'>

                                        <select
                                            value={selectedOptions[item.id] || ''}
                                            onChange={(e) => handleOptionChange(item.id, e)}
                                            className=' my-3 md:py-0 py-3 md:px-[3rem]  px-[5rem] border border-gray-300 rounded'
                                        >
                                            <option value="">Roll cut</option>
                                            <option value="Option 1">Option 1</option>
                                            <option value="Option 2">Option 2</option>
                                        </select>
                                    </div>
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
