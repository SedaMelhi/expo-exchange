import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './../form.sass';
const Cash = ({getDate, date}) => {
    const [arrowClass, setArrowClass] = useState("");
    const { t, i18n } = useTranslation();
    const [currency, setCurrency] = useState(date.currency ?? "USD");
    const [money, setMoney] = useState(date.money ?? ""); 
    const [check, setCheck] = useState(date.check ?? "");
    const [dateForm, setDateForm] = useState({});
    const [modal, setModal] = useState(false);
    const [checkMoney, setCheckMoney] = useState(true)
    useEffect(() => {
        if(money != "" && money <= 0){
            setCheckMoney(false)
            setDateForm({
                money: "",
                currency: currency,
            })
        }else{
            setCheckMoney(true)
            setDateForm({
                money: +money,
                currency: currency,
            })
        }
    }, [money, currency]);
    useEffect(() => {
        getDate(dateForm)
    }, [dateForm]);
    return(
        <div className='form__wrap'>
            <div className='form__item'>
                <p className="form__text">{t("want")}</p>
                <div className="form__input-wrap" onClick={() => arrowClass ? setArrowClass("") : setArrowClass("form__arrow_rotate")}>
                    <select className="form__input form__input_select" value={currency} onChange={(event) => {
                        setCurrency(event.target.value)
                    }}>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    <div className="form__arrow">
                        <img src="./img/arrow.svg" alt="" className={arrowClass}/>
                    </div>
                </div>
            </div>
            <div className='form__item'>
                <p className="form__text">{t("have")} <span className={"form__err " + (checkMoney ? "form__err_hidden" : "form__err_show")}>{t("amount-err")}</span></p>
                <input type="number" className="form__input" value={money} placeholder={t("have-text")} onChange={(event) => setMoney(event.target.value)}/>
            </div> 
        </div>
    )
}

export default Cash