import Description from '../description/description'
import './chat.sass'

const Chat = () => {
    return(
        <div className="chat">
            <Description
                count=""
                title={{text: "Chat for better communication"}}
                text="Communication with clients/cash holders via chat about any detail or concern"/>
            <div className="chat__img">
                <img src="./img/chat.png" alt="" />
            </div>
        </div>
    )
}

export default Chat;