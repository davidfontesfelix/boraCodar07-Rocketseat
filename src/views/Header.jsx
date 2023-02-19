import React from "react";
import "./Header.scss"
import seacher from "../assets/icons/seach.svg"
import location from "../assets/icons/location.svg"
import chevron from "../assets/icons/chevron.svg"

import ilustra1 from "../assets/images/ilustra1.svg"
import ilustra2 from "../assets/images/ilustra2.svg"


export default function Header() {
    return (
        <header>
            <div className="Content">
                <h1>FIND YOUR BLOCK</h1>
                <h2>Encontre os <span>melhores blocos</span><br></br> de carnaval de 2023</h2>

                <form action="#">
                    <div className="seachName">
                        <img src={seacher} alt="" />
                        <input type="text" placeholder="Pesquise por nome"  />
                    </div>
                    <div className="selectCity">
                        <img src={location} alt="" />
                        <select name="select" >
                        <option className="selectLetterGray" value="valor1">Selecione uma cidade</option>
                        </select>
                        <img className="chevron" src={chevron} alt="" />
                    </div>
                    <button>BUSCAR AGORA</button>
                </form>
            </div>
            <img className="Vetor1" src={ilustra1} alt="" />
            <img  className="Vetor2" src={ilustra2} alt="" />
        </header>
    )
}