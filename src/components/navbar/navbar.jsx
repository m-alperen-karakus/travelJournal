import React from "react";
import "./navbar.css"
import earthIcon from "../../assets/earthIcon.svg"

export function Navbar() {
    return(
        <nav>
            <div className="header">
                <img src={earthIcon}></img>
                <div>MAK Travel Journal</div>
            </div>
        </nav>
    )
}