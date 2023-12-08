import React from "react";

export default function Card(props){
    return(
        <div className="CardLayer">
            <header>{props.title}</header>
            <img src={props.img} alt="Error 404" className="Photo"></img>
            <button>Click me</button>
            <footer>{props.footer}</footer>
        </div>
    )
}