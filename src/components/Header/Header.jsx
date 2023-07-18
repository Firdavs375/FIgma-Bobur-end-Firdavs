import "../Header/Style.css"
import Logo from "../../assets/logo/logoHeader.svg"
import L from "../../assets/icon/HeaderL.svg"
import R from "../../assets/icon/HeaderR.svg"
import HeaderImg from "../../assets/image/HeaderImg.svg"

const Header = () => {
    return (
        <>
            <header className="Header">
                <div className="container1H">
                    <div className="CardImg">
                        <div className="HeaderRegihtBox">
                            <div className="ImgHeaderDiv">
                                <img src={Logo} alt="svg" />
                            </div>
                            <h1 className="TextHeader">Ручные и автоматические <br /> дефибрилляторы «Primedic»</h1>
                            <h5 className="TextHeader2">что то нужно написать, может быть <br /> качество и выгодные цены..</h5>
                            <div className="BtnBoxH">
                                <button className="Btn1H">перейти в каталог</button>
                                <div className="BoxIcon">
                                    <img src={L} alt="svg" />
                                    <img src={R} alt="svg" />
                                </div>
                            </div>
                        </div>
                        <div className="HeaderLeftBox">
                            <img src={HeaderImg} alt="svg" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header