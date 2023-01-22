import './header.sass'

const Header = () => {
    return(
        <header>
            <div className="wrap">
            <div className="header">
                <div className="header__text">
                    <div className="header__count">1000+ successful deals</div>
                    <div className="header__title"><span>P2P</span> taken to another level</div>
                    <div className="header__description">Cash transfer in different currencies across the world. Low commission rate and cashback in cryptocurrency </div>
                    <button className="header__button">Get started</button>
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