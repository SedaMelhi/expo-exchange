import './form.sass';

const Form = () => {
    return(
        <form className="form">
            <label>
                <p className="form__item">Имя и фамилия</p>
                <input type="text" className="form__input" placeholder="Имя и фамилия"/>
            </label>
            <label>
                <p className="form__item">Номер для связи</p>
                <input type="tel" className="form__input" placeholder="+7(_ _ _) _ _ _-_ _-_ _"/>
            </label>
            <label>
                <p className="form__item">Способ связи</p>
                <input type="tel" className="form__input" placeholder="+7(_ _ _) _ _ _-_ _-_ _"/>
            </label>
        </form>
    )
}

export default Form;