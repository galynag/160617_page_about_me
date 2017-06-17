import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import Home from './components/home';
// import CV from './components/CV';
import BookList from './components/BookList';
import Hobby from './components/Hobby';
import Contact from './components/Contact';



export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/books" >
                <Route  component={SearchLayout} >
                    <IndexRoute component={BookList} />
                </Route>
            </Route>
            <Route path="/contact">
                    <IndexRoute component={Contact} />
            </Route>
            {/*<Route path="/cv">*/}
                {/*<IndexRoute component={CV} />*/}
            {/*</Route>*/}
            <Route path="/hobby">
                <IndexRoute component={Hobby} />
            </Route>
        </Route>
    </Router>
);
