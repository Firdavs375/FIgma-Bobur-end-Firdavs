import "../Section1/Style.css"
import CardImg1 from "../../assets/image/S1card1.svg"
import CardImg2 from "../../assets/image/S1card2.svg"
import CardImg3 from "../../assets/image/S1card3.svg"
import CardImg4 from "../../assets/image/S1card4.svg"
import CardImg5 from "../../assets/image/S1card5.svg"

const Section1 = () => {
  return (
    <>
      <section className="Section1">
        <div className="container1S">
          <h1 className="Hedding1S">Медицинское оборудование</h1>
          <div className="CardsDivS">
            <div className="BigCard1S">
              <div className="TextDivS">
                <h2 className="BigCardText">ДЕФИБРИЛЯТОРЫ</h2>
                <p className="minText">перейти в каталог </p>
              </div>
              <div className="BigCardImg">
                <img src={CardImg1} alt="svg" />
              </div>
            </div>
            <div className="BiggCardDiv">
              <div className="WhoCardDiv">
                <div className="Card1S">
                  <div className="text1SDiv">
                    <h3 className="HeddingCard1">РЕАНИМАЦИЯ</h3>
                    <p className="textCard1">перейти в каталог</p>
                  </div>
                  <div className="ImgDiv2">
                    <img src={CardImg2} alt="svg" />
                  </div>
                </div>
                <div className="Card1S a3">
                  <div className="text1SDiv">
                    <h3 className="HeddingCard1 a1">СШИВАЮЩИЕ
                      ИНСТРУМЕНТЫ</h3>
                    <p className="textCard1 a2">перейти в каталог</p>
                  </div>
                  <div className="ImgDiv2">
                    <img src={CardImg3} alt="svg" />
                  </div>
                </div>
              </div>
              <div className="WhoCardDiv">
                <div className="Card1S">
                  <div className="text1SDiv">
                    <h3 className="HeddingCard1 a1">МЕДИЦИНСКИЙ ИНСТРУМЕНТ</h3>
                    <p className="textCard1 a2">перейти в каталог</p>
                  </div>
                  <div className="ImgDiv2 a5">
                    <img src={CardImg4} alt="svg" />
                  </div>
                </div>
                <div className="Card1S">
                  <div className="text1SDiv">
                    <h3 className="HeddingCard1 a1">КИСЛОРОДНОЕ ОБОРУДОВАНИЕ</h3>
                    <p className="textCard1 a2">перейти в каталог</p>
                  </div>
                  <div className="ImgDiv2 a5">
                    <img src={CardImg5} alt="svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="EndTextS">показать все медицинское оборудование 👇🏽</p>
        </div>
      </section>
    </>
  )
}

export default Section1