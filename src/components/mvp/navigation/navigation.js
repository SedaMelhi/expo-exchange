import { useTranslation } from 'react-i18next';
import './navigation.sass'
const Navigation = ({step, date}) => {
    const { t, i18n } = useTranslation();
    const dots = []
    const titleUsdt = t("titleUsdt").split(", ")
    const titleCash = t("titleCash").split(", ")
    const count = date.selection === "usdt" ? 5 : 6
    const title = date.selection === "usdt" ? titleUsdt[step-1] : titleCash[step-1]
    for(let i=0; i<count; i++){
        dots.push(<div className="dots__item" key={i}></div>)
    }
    return(
        <div className="navigation">
            <div className="navigation__top">
                <div className="navigation__title">{title}</div>
                <div className="navigation__steps">{t("step")} {step} {t("of")} {count}</div>
            </div>
            <div className="dots">
                {dots.map((dot, i) => i==step-1 ? <div className="dots__item dots__item_active" key={i}></div> : dot)}
            </div>
        </div>
    )
}

export default Navigation;