import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import MoviesList from './components/pages/MoviesList';
import WatchList from './components/pages/WatchList';

//404
import NotFound from './components/pages/NotFound';

const Root = (): JSX.Element => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WatchList} />
            <Route exact path="/movielist/" component={MoviesList} />
            <Route exact path="/movielist/page/:page" component={MoviesList} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
