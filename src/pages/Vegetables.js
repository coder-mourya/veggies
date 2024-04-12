import React, { useState, useEffect } from 'react';
import { dummyItems } from "../assets/Dummydata/dummyData";
import "../assets/styles/items.css";
import "../assets/styles/Allfonts.css";
import product from "../assets/Images/product.png";
import search from "../assets/Images/search.png";
import cart from "../assets/Images/redCart.png";
import "../assets/styles/colors.css";


const Vegetables = () => {
  const [items, setItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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
      [itemId]: event.target.value,
    });
  };


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on the search query
  const filteredItems = items.filter(item =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === '' || item.category === selectedCategory)
  );

  // Handle changes in the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  // Define static categories
  const categories = ['All Vegetables', 'Roots & Bulbous', 'Leafy Veggies', 'Legumes & Stems', 'Fruit Vegetables'];

  return (
    <div className="vegetables mt-7">
      <div className='vegetables-banner flex justify-center'>
        <img src={product} alt="product" className=' w-[90%] rounded-b' />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:w-[95%]">

        <div className="categories flex justify-center col-span-1 md:mt-9 mt-5">

          <div className='container w-[80%] md:ml-[4rem]' >

            <h1 className='text-lg '>Categories</h1>



            <div className='categoriesList  rounded-2xl  w-[90%]'>
              <ul className="category-ul">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="category-li"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}

                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <div className="items col-span-3">

          <div className=' searchBar md:px-4 pl-7 mt-7'>
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by category, product name"
              className='  w-[90%] my-3 py-2 shadow rounded'
            />
            <img src={search} alt="search icon" className="searchIcon " />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow card-items md:w-[90%] w-[65%] md:px-6 mx-auto mb-[5rem] mt-[2rem]"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={item.itemImage}
                    alt={item.itemName}
                    className="md:w-[50%] object-cover"
                  />
                </div>
                <h1 className="text-xl font-semibold text-center">{item.itemName}</h1>
                <p className="text-gray-600 mt-2 text-center">Price: ${item.itemPrice}</p>
                <div className="text-center">
                  <div className='flex justify-center'>

                    <select
                      value={selectedOptions[item.id] || ''}
                      onChange={(e) => handleOptionChange(item.id, e)}
                      className="my-3 md:py-2 py-3 md:px-[5rem] px-[5rem] border border-gray-300 rounded"
                    >
                      <option value="">Roll cut</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                  </div>

                  <div className="flex justify-center">
                    <button className="w-[15rem] flex justify-center items-center py-2 mb-2 cart-button rounded">
                      <img src={cart} alt="cart" className="mr-2" />
                      <span>Add to cart</span>
                    </button>
                  </div>



                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
