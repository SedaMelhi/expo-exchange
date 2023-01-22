import Lang from './lang/lang';
import './nav.sass';

const Nav = () => {
    return(
        <nav>
            <div className="wrap">
                <div className='nav'>
                    <div className="nav__start">
                        <div className="logo">
                            <img src="img/full-logo.png" alt="expovision" />
                        </div>
                        <div className="menu">
                            <a href='#about' className="menu__item">About us</a>
                            <a href='#features' className="menu__item">Features</a>
                            <a href='#tokens' className="menu__item">Tokens</a>
                        </div>
                    </div>
                    <div className="nav__end">
                        <button className='log-in'>Log in</button>
                        <Lang/>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Nav;