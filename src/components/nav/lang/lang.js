import {useState} from 'react';
import './lang.sass';

const Lang = () =>{
    const activeLang = localStorage.getItem("lang") ? localStorage.getItem("lang"): "En";
    const [lang, setLang] = useState(activeLang)

    const changeLang = (lang) => {
        setLang(lang)
        localStorage.setItem("lang", lang)
    }

    return(
        <div className="lang">
            <div className="lang__active">{lang}</div>
            {/* <div className="long__ru">Ru</div> */}
            <div className="lang__wrap">
                <div className="lang__arrow">
                    <img src="./img/arrow.svg" alt=""/>
                </div>
                <div className="lang-menu__wrap">
                    <div className="lang-menu">
                        <div className="lang__item" onClick={() => {changeLang('En')}}>EN</div>
                        <div className="lang__item" onClick={() => {changeLang('Ru')}}>RU</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lang;