import React, {Component} from 'react';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded, menuError, menuRequested} from '../../actions';

import './ItemPage.scss';
import Spinner from "../spinner";
import Error from "../error";

class ItemPage extends Component {
    componentDidMount() {
        const {menuRequested, menuLoaded, menuError, menuItems} = this.props;

        if( menuItems.length === 0) menuRequested();

        this.props.RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(menuError);
    }

    render() {
        const {menuItems, loading, error} = this.props;


        if (loading) return <div className="item_page"><Spinner/></div>;

        const item = menuItems.find(item => +item.id === +this.props.match.params.id);
        const {title, url, category, price} = item;

        if (error) return <div className="item_page"><Error/></div>

        return (
            <div className="item_page">
                <div className="menu__item item_block">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}/>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.menu,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));