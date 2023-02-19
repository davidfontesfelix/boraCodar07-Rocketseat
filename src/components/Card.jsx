import React from "react";
import "./Card.scss"
import location from "../assets/icons/location.svg"

export default function Card(props) {
    return (

    <div className="card">
        <img src={props.img} />
        <div className="infos">
            <h2>{props.nome}</h2>
            <p>{props.texto}</p>
            <div className="locate">
                <h3> <img src={location}/> {props.cidade} - {props.estado}</h3>
            </div>
        </div>
    </div>
    )
}