import React from "react";

import { Link } from "react-router-dom";

import {linkStyle} from "../../styles/styles.js"

import "./Cookies.css"


function Cookies() {


    return (
        <div className="Cookies">
            <div className="Cookies-Selection">
                <h1>Cookies</h1>
                <Link to="/" style={linkStyle}>Back to Home</Link>
            </div>
        </div>
    )

}

export default Cookies;