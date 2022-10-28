import React from "react";
import "./style.css";
import Menu from "./MenuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        }),
        
    ),
    "all"
];

console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    const filterItem = (category) => {
        if (category === "all") {
            return setMenuData(Menu)
        }
        const updatedList = Menu.filter((currentElement) => {
            return currentElement.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <div>
            <Navbar uniqueList={ uniqueList} filterItem={filterItem} />
            <div className="main-card--container">
                {menuData.map((singleMenu, index) => (
                    <MenuCard menuData={singleMenu} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
