import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './../form.sass';
const CashAddress = ({getDate, date}) => {
    const { t, i18n } = useTranslation();
    const [arrowClass, setArrowClass] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState(date.deliveryAddress ?? t("address1"));
    const [myAddress, setMyAddress] = useState(date.myAddress ?? t("address3"));
    const [desc, setDesc] = useState(date.desc ?? " ");
    const [dateForm, setDateForm] = useState({});
    useEffect(() => {
        setDateForm({
            desc: desc ?? " ",
            deliveryAddress: deliveryAddress,
            myAddress: myAddress
        })
    }, [deliveryAddress, desc, myAddress]);
    useEffect(() => {
        getDate(dateForm)
    }, [dateForm]);
    return(
        <div className='form__wrap'>
            <div className='form__item'>
                <p className="form__text">{t("myAddress")}</p>
                <div className="form__input-wrap" onClick={() => arrowClass ? setArrowClass("") : setArrowClass("form__arrow_rotate")}>
                    <select className="form__input form__input_select" value={myAddress} onChange={(event) => {
                        setMyAddress(event.target.value)
                    }}>
                        <option>{t("address1")}</option>
                        <option>{t("address2")}</option>
                        <option>{t("address3")}</option>
                        <option>{t("address4")}</option>
                        <option>{t("address5")}</option>
                    </select>
                    <div className="form__arrow">
                        <img src="./img/arrow.svg" alt="" className={arrowClass}/>
                    </div>
                </div>
            </div>
            <div className='form__item'>
                <p className="form__text">{t("address")}</p>
                <div className="form__input-wrap" onClick={() => arrowClass ? setArrowClass("") : setArrowClass("form__arrow_rotate")}>
                    <select className="form__input form__input_select" value={deliveryAddress} onChange={(event) => {
                        setDeliveryAddress(event.target.value)
                    }}>
                        <option>{t("address1")}</option>
                        <option>{t("address2")}</option>
                        <option>{t("address3")}</option>
                        <option>{t("address4")}</option>
                        <option>{t("address5")}</option>
                    </select>
                    <div className="form__arrow">
                        <img src="./img/arrow.svg" alt="" className={arrowClass}/>
                    </div>
                </div>
            </div>
            <div className='form__item'>
                <p className="form__text">{t("desc")}</p>
                <div className="form__desc-wrap">
                    <textarea type="text" className="form__input form__desc" placeholder={t("details")} value={desc.trim() === "" ? desc.trim() : desc} onChange={(event) => {event.target.value != "" ? setDesc(event.target.value) : setDesc(" ")
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default CashAddress;