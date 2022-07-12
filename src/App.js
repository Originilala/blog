import React, {useState} from 'react';
import './App.css';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Blog from '../src/components/Blog';
import Post from '../src/components/Post';
import {
    NavLink,
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const history = useHistory();

    function sendToHome() {
        toggleIsAuthenticated({
            isAuthenticated: false,
        });
        history.push("/");
    }

    function sendToBlog() {
        toggleIsAuthenticated(
            true
        );
        console.log(isAuthenticated);
        history.push("/blogposts");
    }

    return (
        <>
            <nav>
                <li><NavLink to="/">Home</NavLink></li>
                {isAuthenticated === true ? <li>
                    <button type="button" onClick={sendToHome}>Logout</button>
                </li> : <li><NavLink to="/login">Login</NavLink></li>}
                {isAuthenticated === true && <li><NavLink to="/blogposts">Blog</NavLink></li>}
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login onClick={sendToBlog}/>
                </Route>
                {isAuthenticated === true && <Route exact path="/blogposts">
                    <Blog/>
                </Route>}
                {isAuthenticated === true && <Route path="/blogposts/:blogId">
                    <Post/>
                </Route>
                }
            </Switch>
        </>
    );
}

export default App;
