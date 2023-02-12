import Nav from "../nav/Nav";
import MvpContent from "./mvpContent/MvpContent";
import { useTranslation } from 'react-i18next';
import Footer from "./footer/Footer";
import './mvp.sass'
const Mvp = () => {
    const { t, i18n } = useTranslation();
    const menu = {
        aboutUs: t("about_us"),
        advantages: t("advantages"),
        tokens: t("tokens"),
    }
    return(
        <div className="mvp-wrap">
            <Nav items={menu} path=""/>
            <MvpContent/>
            <Footer/>
        </div>
    )
}

export default Mvp;