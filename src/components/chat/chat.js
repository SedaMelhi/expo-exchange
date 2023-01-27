import Description from '../description/description';
import { useTranslation } from 'react-i18next';
import './chat.sass'

const Chat = () => {
    const { t, i18n } = useTranslation();
    return(
        <div className="chat" id='chat'>
            <div className="wrap">
                <Description
                    count=""
                    title={{text: t("chat_title")}}
                    text={t("chat_text")}/>
                <div className="chat__img">
                    <img src="./img/chat.png" alt="" />
                </div>
            </div> 
        </div>
    )
}

export default Chat;