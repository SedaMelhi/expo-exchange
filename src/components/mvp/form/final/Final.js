import { useTranslation } from 'react-i18next';
import './../form.sass';
const Final = () => {
    const { t, i18n } = useTranslation();
    return(
        <div className="form__wrap">
            <div className="form__title">{t("application")}</div>
            <div className="form__description">{t("soonCall")}</div>
            <div className="form__status">{t("status")}: <span>{t("progress")}</span></div>
        </div>
    )
}

export default Final