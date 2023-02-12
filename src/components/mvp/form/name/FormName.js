import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './../form.sass';

const FormName = ({getDate, date}) => {
    const [arrowClass, setArrowClass] = useState("");
    const [name, setName] = useState(date.name ?? "");
    const [phone, setPhone] = useState(date.phone ?? "");
    const [contact, setContact] = useState(date.contact ?? "Viber"); 
    const [dateForm, setDateForm] = useState({});
    const { t, i18n } = useTranslation();
    useEffect(() => {
        setDateForm({
            name: name,
            phone: phone,
            contact: contact,
        })
    }, [name, phone, contact])
    useEffect(() => {
        getDate(dateForm)
    }, [dateForm])
    return(
        <div className='form__wrap'>
            <div className='form__item'>
                <p className="form__text">{t("fio")}</p>
                <input type="text" className="form__input" onChange={(event) => setName(event.target.value)} value={name} placeholder={t("fio")}/>
            </div>
            <div className='form__item'>
                <p className="form__text">{t("contact_number")}</p>
                <input type="tel" className="form__input" value={phone} placeholder="+7(_ _ _) _ _ _-_ _-_ _" onChange={(event) => setPhone(event.target.value)}/>
            </div>
            <div className='form__item'>
                <p className="form__text">{t("method")}</p>
                <div className="form__input-wrap" onClick={() => arrowClass ? setArrowClass("") : setArrowClass("form__arrow_rotate")}>
                    <select className="form__input form__input_select" value={contact} onChange={(event) => {
                        setContact(event.target.value)
                    }}>
                        <option>Viber</option>
                        <option>Telegram</option>
                    </select>
                    <div className="form__arrow">
                        <img src="./img/arrow.svg" alt="" className={arrowClass}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormName;