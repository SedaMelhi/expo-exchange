import Lang from './lang/Lang';
import Menu from './menu/Menu';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './nav.sass';

const Nav = ({items, path}) => {
    const { t, i18n } = useTranslation();
    return(
        <nav>
            <div className="wrap">
                <div className='nav'>
                    <div className="nav__start">
                        <HashLink to='/' className="logo" >
                            <img src="img/full-logo.png" alt="expovision" />
                        </HashLink>
                        <Menu items={items} path={path}/>
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