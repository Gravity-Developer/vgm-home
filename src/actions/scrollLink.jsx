import React from "react";
import { useState } from "react";
import "./scrollLink.css"
import "../components/menu.css"

import { Link } from "react-router-dom";
export function ScrollLink(props){
    
    return (
        <div >
            <Link to="#"className="scrollLink" onClick={(e)=>{
            document.getElementById(props.element).scrollIntoView({behavior:"smooth"})
            console.log(props.element)
            
        }}> {  props.children } </Link>
        </div>
    )
}