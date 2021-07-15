import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>

            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/cart" exact>
                    <CartPage/>
                </Route>
                <Route path="/:id" exact component={ItemPage}/>
            </Switch>
        </div>
    )
}

export default App;