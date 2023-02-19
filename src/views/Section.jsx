import React from "react";
import GridCards from "./GridCards";
import "./Section.scss"


export default function Section() {

    return (
        <section>
            <div className="content">
                <div className="title">
                    <h2>Bloco recomendados</h2>
                    <div className="buttons-select">
                        <button className="selected">LISTA</button>
                        <button className="no-selected">MAPA</button>
                    </div>
                </div>
                <GridCards/>
            </div>
        </section>
    )
}