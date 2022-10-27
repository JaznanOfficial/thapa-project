import React from "react";
import './style.css'

const Restaurant = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author subtle">Breakfast</span>
                        <h2 className="card-title">Maggi</h2>
                        <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum quam commodi totam non molestias, reiciendis eligendi possimus quis error corporis quas in fuga. Cumque, molestias eos accusantium impedit voluptates, atque natus id eveniet asperiores perferendis quibusdam repellendus rem placeat, tempora corporis ad. Perspiciatis harum eligendi neque autem soluta sapiente!</span>
                        <div className="card-read">Read</div>

                    </div>
                    <img src={'https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?k=20&m=104704117&s=612x612&w=0&h=kpYSHTcSnkQZbhHmUr25jIIvns7f3x2oBMNvX1lLTwU='} alt="" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </>
    );
};

export default Restaurant;
