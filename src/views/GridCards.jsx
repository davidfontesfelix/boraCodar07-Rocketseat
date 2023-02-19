import React from "react";
import Card from "../components/Card";
import Img1 from "../assets/images/locais/img1.png"
import Img2 from "../assets/images/locais/img2.png"
import Img3 from "../assets/images/locais/img3.png"

import Img4 from "../assets/images/locais/img4.png"
import Img5 from "../assets/images/locais/img5.png"
import Img6 from "../assets/images/locais/img6.png"

import Img7 from "../assets/images/locais/img7.png"
import Img8 from "../assets/images/locais/img8.png"
import Img9 from "../assets/images/locais/img9.png"

const mountCard = (img, name, text, city, state) => {
    return (<Card img={img} nome={name} texto={text} cidade={city}estado={state}/> )
}

export default function GridCards() {
    return(
        <div className="grid-cards">
                <ul className="ul1">
                    <li> 
                        {mountCard(Img1, 
                            "O Python do vovô não sobe mais", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "São Paulo",
                            "SP"
                        )}
                    </li>
                    <li> 
                        {mountCard(Img2, 
                            "Todo mundo null", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "Florianópolis",
                            "SC"
                        )}
                    </li>
                    <li>
                        {mountCard(Img3, 
                            "Hoje dou exception", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "Curitiba",
                            "PR"
                        )}
                    </li>
                </ul>


                <ul className="ul2">
                <li> 
                        {mountCard(Img4, 
                            "Manda Node", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "Salvador",
                            "BA"
                        )}
                    </li>
                    <li> 
                        {mountCard(Img5, 
                            "Só no back-end", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "São Paulo",
                            "SP"
                        )}
                    </li>
                    <li>
                        {mountCard(Img6, 
                            "Esse anel não é de Ruby", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "São Paulo",
                            "SP"
                        )}
                    </li>
                </ul>



                <ul className="ul3">
                <li> 
                        {mountCard(Img7, 
                            "Pimenta no C# dos outros é refresco", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "Rio de Janeiro",
                            "RJ"
                        )}
                    </li>
                    <li> 
                        {mountCard(Img8, 
                            "EnCACHE aqui", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "Porto Alegre",
                            "RS"
                        )}
                    </li>
                    <li>
                        {mountCard(Img9, 
                            "Não valho nada mas JAVA li", 
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", 
                            "São Paulo",
                            "SP"
                        )}
                    </li>
                </ul>
        </div>
    )
}