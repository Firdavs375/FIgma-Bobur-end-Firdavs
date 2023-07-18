import "../Section2/Style.css"
import Card1 from "../../assets/image/S2Card1.svg"
import Star1 from "../../assets/icon/StarSariq.svg"
import Star2 from "../../assets/icon/StarOq.svg"
import { section2CardMap } from "../../utiels/Utiels"
import React from "react"

const Section2 = () => {
    return (
        <>
            <section className="Section2">
                <div className="container3S">
                    <h1 className="Heddig1S2">Новинки</h1>
                    <div className="CardDivBig2">
                        {section2CardMap?.map(({nomer,text,price,img},Index) => {
                            return (
                                <React.Fragment key={Index}>
                                    <div className="CardsS2">
                                        <div className="StarDivS2">
                                            <img src={Star1} alt="svg" />
                                            <img src={Star1} alt="svg" />
                                            <img src={Star1} alt="svg" />
                                            <img src={Star2} alt="svg" />
                                            <img src={Star2} alt="svg" />
                                        </div>
                                        <img src={img} alt="svg" />
                                        <div className="TextDivS2">
                                            <p className="nomer">{nomer}</p>
                                            <h2 className="Text2S2">{text}</h2>
                                            <p className="Price">{price}</p>
                                            <div className="BtnDivCard2">
                                                <button className="btn1S2">в корзину</button>
                                                <button className="btn1S2">купить</button>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2