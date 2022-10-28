import React from "react";

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    const { name, image, description, price, category } = menuData;
    return (
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">{description}</span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
