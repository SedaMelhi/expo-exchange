import Chat from "../chat/chat";
import Faq from "../faq/faq";
import Header from "../header/header";
import Services from "../services/services";
import Steps from "../steps/steps";

const Content = ({onBtnClick}) => {
    return(
        <div className="content">
            <Header onBtnClick = {onBtnClick}/>
            <Services/>
            <Steps/>
            <Chat/>
            <Faq/>
        </div>
    )
}

export default Content;