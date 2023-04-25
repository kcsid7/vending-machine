import React from "react";
import { Link } from "react-router-dom";

import {linkStyle} from "../styles/styles.js"

import "./VendingMachine.css"

function VendingMachine() {

    return (
        <div className="VendingMachine">
            <div className="VendingMachine-Selection">
                <h1>Vending Machine</h1>
                <Link to="cola" style={linkStyle}>Cola</Link>
                <Link to="chips" style={linkStyle}>Chips</Link>
                <Link to="cookies" style={linkStyle}>Cookies</Link>
            </div>
        </div>
    )

}

export default VendingMachine;