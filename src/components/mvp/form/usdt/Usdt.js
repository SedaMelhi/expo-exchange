import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './../form.sass';
const Usdt = ({getDate, date}) => {
    const { t, i18n } = useTranslation();
    const [arrowClass, setArrowClass] = useState("");
    const [currency, setCurrency] = useState(date.currency ?? `${t("lira")} (TRY)`);
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
                check: check ?? ""
            })
        }else{
            setCheckMoney(true)
            setDateForm({
                money: +money,
                currency: currency,
                check: check ?? ""
            })
        }
    }, [money, currency, check]);
    useEffect(() => {
        getDate(dateForm)
    }, [dateForm]);
    const toggleModal = (event) => {
        event.preventDefault()
        setModal(!modal)
    };
    return(
        <div className='form__wrap'>
            <div className='form__item'>
                <p className="form__text">{t("currency")}</p>
                <div className="form__input-wrap" onClick={() => arrowClass ? setArrowClass("") : setArrowClass("form__arrow_rotate")}>
                    <select className="form__input form__input_select" value={currency} onChange={(event) => {
                        setCurrency(event.target.value)
                    }}>
                        <option>{t("lira")} (TRY)</option>
                        <option>{t("ruble")} (RUB)</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    <div className="form__arrow">
                        <img src="./img/arrow.svg" alt="" className={arrowClass}/>
                    </div>
                </div>
            </div>
            <div className='form__item'>
                <p className="form__text">{t("amount")} <span className={"form__err " + (checkMoney ? "form__err_hidden" : "form__err_show")}>{t("amount-err")}</span></p>
                <input type="number" className="form__input" value={money} placeholder={t("have-text-usdt")} onChange={(event) => setMoney(event.target.value)}/>
            </div>
            <div className="conditions">
                <input type="checkbox" name="conditions" id="conditions" onClick={() => setCheck(!check)} defaultChecked={check}/>
                <label htmlFor="conditions">
                    <div className={"conditions__box" + (check ? " conditions__check" : "")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="4"/>
                            <path d="M16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289Z"/>
                        </svg>
                    </div>
                    <div className="conditions__text">
                        {t("accept")} <span className="conditions__link" onClick={toggleModal}>{t("accept-text")}</span>
                    </div>
                </label>
            </div>
            <div className={"modal " + (modal ? "modal_show" : "modal_hidden")}>
                <div className="modal__wrap">
                    <div className="modal__close" onClick={toggleModal}><img src="./img/close.svg" alt="" /></div>
                    <div className="modal__title">{t("agree")}</div>
                    <div className="modal__text">
                        Настоящим согласием подтверждаю, что проинформирован о том, что под обработкой персональных данных понимаются действия, определённые в Федеральном законе <a href="http://www.consultant.ru/document/cons_doc_LAW_61801/" target="_blank">№ 152-ФЗ от 27.07.2006 «О персональных данных»</a>, а именно: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), блокирование, удаление персональных данных, совершаемые с использованием средств автоматической, а также неавтоматической обработки данных. 
                        <div className="conditions">
                            <input type="checkbox" name="conditions" id="conditions-modal" onClick={() => setCheck(!check)} defaultChecked={check}/>
                            <label htmlFor="conditions-modal">
                                <div className={"conditions__box" + (check ? " conditions__check" : "")}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="4"/>
                                        <path d="M16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289Z"/>
                                    </svg>
                                </div>
                                <div className="conditions__text">
                                    {t("accept")} {t("accept-text")}
                                </div>
                            </label>
                            <button className="conditions__btn" onClick={(event) => {
                                event.preventDefault()
                                setCheck(!check)
                            }}>{t("agree")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usdt