import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <div>
                <NavLink to="/">Home </NavLink> | 
                <NavLink to="/page1"> Page 1 </NavLink> |  
                <NavLink to="/page2"> Page 2 </NavLink>
            </div>
        )
    }
}

export default Header;