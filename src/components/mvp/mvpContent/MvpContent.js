import Form from '../form/Form';
import Navigation from './../navigation/Navigation';
import './mvpContent.sass'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
const MvpContent = () => {
    const { t, i18n } = useTranslation();
    const [dateForm, setDateForm] = useState({})
    const [step, setStep] = useState(1)
    const [checkForm, setCheckForm] = useState(true)
    const btnHandler = (event) => {
        event.preventDefault();
        let check = true
        for(let key in dateForm){
            if(dateForm[key] == ""){
                check=false
                break
            }
        }
        if(check){
            setStep(step+1)
            setCheckForm(true)
        }else{
            setCheckForm(false)
        }   
        console.log(dateForm);
    }
    const btnPrevHandler = (event) => {
        event.preventDefault();
        let obj = dateForm
        for(let key in obj){
            if (obj[key] == ""){
                delete obj[key]
            }
        }
        step-1 > 0 ? setStep(step-1):setStep(1)
        setDateForm(obj)
        console.log(dateForm);
    }
    const getDate = (date) => {
        setDateForm(Object.assign(dateForm, date))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const date = dateForm
        btnHandler(event)
        let message = `<b>Имя</b>: ${date.name}\n`
            message +=`<b>Приложение для связи</b>: ${date.contact}\n`
            message +=`<b>Номер телефона</b>: ${date.phone}\n`
            message +=`<b>Кэш или крипта</b>: ${date.selection}\n`
            message +=`<b>Место назначение</b>: ${date.deliveryAddress}\n` 
        if(date.selection === 'usdt'){
            message +=`<b>Описание</b>: ${date.desc}\n`
            message +=`<b>Сумма</b>: ${date.money}\n`
            message +=`<b>Валюта</b>: ${date.currency}\n`
        }else{
            message +=`<b>Место пребывания</b>: ${date.myAddress}\n`
            message +=`<b>Описание</b>: ${date.desc}\n`
            message +=`<b>У меня есть</b>: ${date.money + " " + date.currency}\n`
            message +=`<b>Я хочу</b>: ${date.desiredMoney + " " + date.desiredCurrency}\n`
        }
        const token = '6202287032:AAEn5ZPxNHLhaEDT72rZ4ByUh30LCuKW6Ng'
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"chat_id": 399305767, "parse_mode": "html", "text": message})
        })
    }
    const createNewRequest = (event) => {
        event.preventDefault()
        setStep(1)
        setDateForm({
            name: dateForm.name,
            phone: dateForm.phone,
            contact: dateForm.contact
        })
    }
    return(
        <div className="content">
            <div className="content__wrap">
                <Navigation step={step} date={dateForm}/>
                <form action="" className="form">
                    <Form getDate = {getDate} updateForm={step-1} date={dateForm} value={dateForm.selection ? dateForm.selection: "cash"}/>
                    <p className={checkForm ? 'text-error' : 'text-error text-error_show'}>{t("form-err")}</p>
                    {
                        (dateForm.selection == "usdt" && step == 5 || dateForm.selection == "cash" && step == 6) ? 
                        <button className='buttons__btn buttons__btn_blue buttons__btn_big' onClick={createNewRequest}>{t("new-request")}</button> 
                        :
                        (dateForm.selection == "usdt" && step == 4 || dateForm.selection == "cash" && step == 5) ? 
                        <div className="buttons">
                            <button className='buttons__btn' onClick={btnPrevHandler}>{t("prev")}</button>
                            <button className='buttons__btn buttons__btn_blue' onClick={onSubmit}>{t("request")}</button> 
                        </div>
                        :
                        <div className="buttons">
                            <button className='buttons__btn' onClick={btnPrevHandler}>{t("prev")}</button>
                            <button className='buttons__btn buttons__btn_blue' onClick={btnHandler}>{t("next")}</button>
                        </div>
                    }
                </form>          
            </div>
        </div>
    )
}

export default MvpContent;