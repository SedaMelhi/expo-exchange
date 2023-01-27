import Lang from './lang/lang';
import { useTranslation } from 'react-i18next';
import './nav.sass';

const Nav = () => {
    const { t, i18n } = useTranslation();
    return(
        <nav>
            <div className="wrap">
                <div className='nav'>
                    <div className="nav__start">
                        <a href='./index.html' className="logo">
                            <img src="img/full-logo.png" alt="expovision" />
                        </a>
                        <div className="menu">
                            <a href='#services' className="menu__item">{t("services")}</a>
                            <a href='#deals' className="menu__item">{t("deals")}</a>
                            <a href='#chat' className="menu__item">{t("chat")}</a>
                            <a href='#faq' className="menu__item">{t("faq")}</a>
                        </div>
                    </div>
                    <div className="nav__end">
                        <button className='log-in'>{t("log_in")}</button>
                        <Lang/>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav;