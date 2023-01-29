import './navigation.sass'
const Navigation = () => {
    let steps = 1;
    return(
        <div className="navigation">
            <div className="navigation__top">
                <div className="navigation__title">Мои данные</div>
                <div className="navigation__steps">Шаг {steps} из 6</div>
            </div>
            <div className="dots">
                <div className="dots__item dots__item_active"></div>
                <div className="dots__item"></div>
                <div className="dots__item"></div>
                <div className="dots__item"></div>
                <div className="dots__item"></div>
                <div className="dots__item"></div>
            </div>
        </div>
    )
}

export default Navigation;