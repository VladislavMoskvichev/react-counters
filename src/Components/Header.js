import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div>
            <header>
                <h1 className="title">
                    react counters
                </h1>
                <nav className="links">
                    <NavLink to="/stateCounter">state counter</NavLink>
                    <NavLink to="/hookCounter">hook counter</NavLink>
                    <NavLink to="/reducerCounter">reducer counter</NavLink>
                    <NavLink to="/reduxCounter" >redux counter</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header;