import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardProduct from './components/CardProduct';
import FormProduct from './components/FormProduct'
import Menu from './components/Menu';

const Routes = () => (
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/"  component={CardProduct}/>
            <Route exact path="/add"  component={FormProduct}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;