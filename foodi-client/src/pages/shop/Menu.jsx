import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    //fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        //console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Ërror fetching data");
      }
    };
    // call the function
    fetchData();
  }, []);

  //filtering data based on category
  //   const filterItems = (category) => {
  //     const
  //   }
  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col justify-center items-center gap-8">
          {/* texts */}
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl  font-bold md:leading-snug leading-snug">
              For the love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Magyu, Olivas
              Rellens and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container"></div>
    </div>
  );
};

export default Menu;
