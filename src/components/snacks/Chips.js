import React from "react";

import { Link } from "react-router-dom";

import {linkStyle} from "../../styles/styles.js"

import "./Chips.css"

function Chips() {

    return (
        <div className="Chips">
            <div className="Chips-Selection">
                <h1>Chips</h1>
                <Link to="/" style={linkStyle}>Back to Home</Link>
            </div>
        </div>
    )

}

export default Chips;