import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './formSelection.sass' 
const FormSelection = ({getDate, date}) => {
    const [value, setValue] = useState({selection:  date.selection ?? "cash"});
    const { t, i18n } = useTranslation();
    const changeValue = (event) => {
        setValue({selection: event.target.value});
    }
    useEffect(() => {
        getDate(value)
    }, [value])
    return(
        <div className='form__wrap'>
            <div className="selections">
                <div className={`selection ${value.selection == "cash"? 'selection__active' : ''}`} >
                    <input type="radio" name='cash' id='cash' value='cash' checked={value.selection == 'cash' ? true : false} onChange={changeValue}/>
                    <label htmlFor='cash'> 
                        <div className="selection__left">
                            <img src="./img/cash.svg" alt="" />
                        </div>
                        <div className="selection__right">
                            <div className="selection__title">{t("cash")}</div>
                            <div className="selection__text">
                                {t("cash-text")}
                            </div>
                        </div>
                    </label>
                </div>
                <div className={`selection ${value.selection == "usdt"? 'selection__active' : ''}`}>
                    <input type="radio" name='cash' id='usdt' value='usdt' checked={value.selection == 'usdt' ? true : false} onChange={changeValue}/> 
                    <label htmlFor='usdt'>
                        <div className="selection__left">
                            <img src="./img/usdt.svg" alt="" />
                        </div>
                        <div className="selection__right">
                            <div className="selection__title">USDT</div>
                            <div className="selection__text">{t("usdt-text")}</div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FormSelection