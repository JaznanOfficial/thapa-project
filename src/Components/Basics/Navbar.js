import React from 'react';

const Navbar = ({uniqueList,filterItem}) => {
    
    return (
        <div>
        <nav className="navbar">
        <div className="btn-group">
            {uniqueList.map((category) => (
                <button
                    className="btn-group__item"
                    onClick={() => filterItem(`${category}`)}
                >
                    {category}
                </button>
            ))}
        </div>
    </nav>
        </div>
    );
};

export default Navbar;