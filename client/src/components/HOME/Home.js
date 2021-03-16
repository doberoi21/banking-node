import React from 'react';
import "./Home.css";
import {NavLink} from 'react-router-dom';
import Contact from '../CONTACT/Contact';

const Home = () => {
    return(
        <div>
            <div className="home-main">
            <div className="welcome">
            <h1>WELCOME</h1>
            <h1>TO</h1>
            <h1>TSF BANK</h1>
            <NavLink exact to="/user">
                <button className="btn">View User</button>
            </NavLink>
            </div>
            </div>
            <Contact id="contact"/>
        </div>
    );
}
export default Home;