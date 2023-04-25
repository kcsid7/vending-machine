import React from "react";
import { Link } from "react-router-dom";

import {linkStyle} from "../../styles/styles.js"

import "./Cola.css"

function Cola() {

    
    return (
        <div className="Cola">
            <div className="Cola-Selection">
                <h1>Cola</h1>
                <Link to="/" style={linkStyle}>Back to Home</Link>
            </div>
        </div>
    )

}

export default Cola;