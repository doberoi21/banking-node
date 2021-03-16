import React from "react";
import "./Nav.css";
import bank from "./bankLogo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header className="Nav-bar">
        <div><img src={bank} style={{height:"50px",width:"50px",marginLeft:"50%"}}/></div>
        <div>
          <ul className="links">
            <NavLink exact className="b" activeClassName="active_class" to="/">
              Home
            </NavLink>
            <NavLink
              exact
              className="b"
              activeClassName="active_class"
              to="/transfer"
            >
              TRANSFER MONEY
            </NavLink>
            
          </ul>
        </div>
      </header>
    </div>
  );
};
export default Nav;

{/* <NavLink
              exact
              className="b"
              activeClassName="active_class"
              to="/transfer/contact"
            >
              CONTACT US
            </NavLink> */}

