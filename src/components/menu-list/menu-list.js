import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded, menuError, menuRequested} from '../../actions';

import './menu-list.scss';
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {
    componentDidMount() {
        const {menuRequested, menuLoaded, menuError} = this.props;

        menuRequested();

        this.props.RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(menuError);
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (loading) return <Spinner/>;

        if (error) return <Error/>

        return (
            <ul className="menu__list">
                {menuItems.map(menuItem => <MenuListItem key={menuItem.id} menuItem={menuItem}/>)}
            </ul>
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


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));