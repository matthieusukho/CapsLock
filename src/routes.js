import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import error404 from './components/404';
import Gallery from './components/gallery';
import Sign from './components/sign';
import App from './components/app';

const MyRoute = () => (
    <Router>
        <div>
            <App name='layout'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/sign" component={Sign} />
                    <Route component={error404} />
                </Switch>
            </App>
        </div>
    </Router>
);

export default MyRoute;

