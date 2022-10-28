import React from "react";
import "./style.css";
import Menu from "./MenuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";



const uniqueList = [
    
    ...new Set(Menu.map(curElem => {
    return curElem.category;
}))]

console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    const filterItem = (category) => {
        const updatedList = Menu.filter(currentElement => {
            return currentElement.category === category;
        });
        setMenuData(updatedList)

    }

    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    {uniqueList.map((category)=><button className="btn-group__item" onClick={()=>filterItem(`${category}`)}>{category}</button>)}
                </div>
                </nav>
            <div className="main-card--container">
                {menuData.map((singleMenu, index) => (
                    <MenuCard menuData={singleMenu} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
