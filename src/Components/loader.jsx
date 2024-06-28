import React from "react";
import '../App.css'
export function Loader() {
    return(
        <div id="loader">
            <img src={require(`../images/loader.gif`)} alt="loader"/>
        </div>
    );
}

