import React from 'react';

import SearchPage from './containers/SearchPage/SearchPage';
import RecipePage from './containers/RecipePage/RecipePage';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SearchPage} />
                <Route path="/recipe/:id" exact component={RecipePage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
