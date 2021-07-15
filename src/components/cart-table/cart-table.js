import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {handleRemoveItemFromCart} from "../../actions";

const CartTable = ({items, handleRemoveItemFromCart}) => {

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item => {
                    const {title, id, url, price, qtty} = item;
                    return (
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}/>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{`${price}$ x ${qtty}`}</div>
                            <div
                                onClick={()=>handleRemoveItemFromCart(id)}
                                className="cart__close"
                            >&times;</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

const mapStateToProps = ({itemsInCart}) => ({items: itemsInCart});

const mapDispatchToProps = {handleRemoveItemFromCart};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);