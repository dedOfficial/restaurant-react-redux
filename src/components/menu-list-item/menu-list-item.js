import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";

const MenuListItem = ({menuItem, handleAddItemToCart}) => {
    const {title, url, category, price} = menuItem;

    return (
        <li className="menu__item">
            <Link to={`/${menuItem.id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}/>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>

                <span className = {`menu__category_Img ${category}`}/>
            </Link>
            <button
                onClick={()=>handleAddItemToCart()}
                className="menu__btn"
            >Add to cart</button>
        </li>
    );
};

export default MenuListItem;