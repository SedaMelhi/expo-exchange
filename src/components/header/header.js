import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Description from '../description/description';
import './header.sass'

const Header = ({onBtnClick}) => {
    const { t, i18n } = useTranslation();
    const [imgState, setImgState] = useState(false)
    return(
        <header className={imgState ? "animation":""} alt="" onLoad={() => setImgState(true)}>
            <div className="wrap">
            <div className="header">
                <div className="description__wrap">
                    <Description 
                        count={t("successful")} 
                        title={{span: "P2P", text: t("header_title")}}
                        text={t("header_text")}/>
                </div>
                <button onClick={onBtnClick} className="button">{t("header_btn")}</button>
                <div className="circle circle_blue">
                    <img src="./img/plane.svg" alt=""/>
                </div>
                <div className="circle circle_brow">
                    <img src="./img/bag.svg" alt=""/>
                </div>
                <div className="circle circle_green">
                    <img src="./img/money.svg" alt=""/>
                </div>
                <div className="circle circle_yellow">
                    <img src="./img/hands.svg" alt=""/>
                </div>
                <div className="header__image">
                    <img src="./img/header.png" alt="" />
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header;