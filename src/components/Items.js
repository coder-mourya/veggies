import React, { useState, useEffect } from 'react';
import dummyData from "../assets/Images/items/Items.json";
import item1 from "../assets/Images/items/item1.png";
import item2 from "../assets/Images/items/item2.png";
import item3 from "../assets/Images/items/item3.png";
import item4 from "../assets/Images/items/item4.png";


const Items = () => {

    const [items, setItems] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});


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



    return (
        <div className="container mx-[2rem] mt-8 px-4">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-lg w-[90%] shadow-md p-4">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={getImagePath(item.itemImage)}
                                alt={item.itemName}
                                className="w-[50%] object-cover"
                            />
                        </div>
                        <h1 className="text-xl font-semibold">{item.itemName}</h1>
                        <p className="text-gray-600 mt-2">Price: ${item.itemPrice}</p>
                        <select value={selectedOptions[item.id] || ''} onChange={(e) => handleOptionChange(item.id, e)}>
                            <option value="">Select Option</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            {/* Add more options if needed */}
                        </select>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Items;
