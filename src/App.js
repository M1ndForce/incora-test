import React from 'react';
import './App.css';
import Users from "./features/users/Users";

import {Route, Switch} from 'react-router-dom'
import Posts from "./features/posts/Posts";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/posts/:userId'} component={Posts}/>
                <Route path={'/'} component={Users}/>
            </Switch>
        </div>
    );
}

export default App;
