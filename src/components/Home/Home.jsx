import "../Home/Style.css"
import logo from "../../assets/logo/Frame (2).svg"
import Menu from "../../assets/icon/menu 1.svg"
import Lupa from "../../assets/icon/loupe 1.svg"
import TelZ from "../../assets/icon/TelZ.svg"
import Tg from "../../assets/icon/Telegram.svg"
import Tel from "../../assets/icon/Telefon.svg"
import WS from "../../assets/icon/WhatSapp.svg"
import St from "../../assets/icon/Statistika.svg"
import SHop from "../../assets/icon/shopping.svg"
import Dr from "../../assets/icon/doctor.svg"
import Header from "../Header/Header"
import Section1 from "../Section1/Section1"
import Section2 from "../Section2/Section2"

const Home = () => {
    return (
        <>
            <nav>
                <div className="container1N">
                    <div className="LogoDiv">
                        <img src={logo} alt="svg" />
                    </div>
                    <div className="CatalogEndIconDiv">
                        <img src={Menu} alt="svg" />
                        <p className="TextK">КАТАЛОГ</p>
                    </div>
                    <div className="PoiskDiv">
                        <img src={Lupa} alt="svg" />
                        <input type="text" placeholder="Поиск медицинского оборудования" className="Inpm1N" />
                    </div>
                    <div className="ZvanokDiv">
                        <img src={TelZ} alt="svg" />
                        <p className="Text2N">Заказать обратный звонок</p>
                        <hr className="hr1N" />
                    </div>
                    <h1 className="Nomer">8 (3412) 65-08-77</h1>
                    <div className="IconsDivN">
                        <img src={Tg} alt="svg" />
                        <img src={Tel} alt="svg" />
                        <img src={WS} alt="svg" />
                    </div>
                </div>
                <div className="container1N">
                    <ul className="ListItems">
                        <li className="list">О компании</li>
                        <li className="list">Производители </li>
                        <li className="list">Доставка</li>
                        <li className="list">Оплата</li>
                        <li className="list">Новости</li>
                        <li className="list">Реквизиты</li>
                        <li className="list">Контакты</li>
                    </ul>
                    <div className="IconDiv2N">
                        <div className="IconTextDiv2N">
                            <img src={St} alt="svg" />
                            <p className="text2N">Сравнения</p>
                        </div>
                        <div className="IconTextDiv2N">
                            <img src={SHop} alt="svg" />
                            <p className="text2N">Корзина</p>
                        </div>
                        <div className="IconTextDiv2N">
                            <img src={Dr} alt="svg" />
                            <p className="text2N">Личный кабинет</p>
                        </div>
                    </div>
                </div>
            </nav>
            <Header />
            <Section1/>
            <Section2/>
        </>
    )
}

export default Home