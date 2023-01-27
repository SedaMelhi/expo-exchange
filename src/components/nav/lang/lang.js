import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../18n/18n';
import './lang.sass';

const Lang = () =>{
    const { t, i18n } = useTranslation();
    const activeLang = localStorage.getItem("lang") ? localStorage.getItem("lang"): "En";
    const [lang, setLang] = useState(activeLang)
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const changeText = (lang) => {
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
                        <div className="lang__item" onClick={() => {
                            changeText('En')
                            changeLanguage('en')
                        }}>EN</div>
                        <div className="lang__item" onClick={() => {
                            changeText('Ru')
                            changeLanguage('ru')
                        }}>RU</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lang;