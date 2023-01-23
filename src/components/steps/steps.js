import Description from '../description/description'
import './steps.sass';

const Steps = () => {
    return(
        <div className="steps">
            <div className="wrap">
                <div className="steps__line">
                    <div className="steps__item steps__description">
                        <div className="steps__text">
                            <Description
                                count="3 types of deals"
                                title={{text:"Step by step deal instructions"}}
                                text="Entering a deal has never been easier. Complete transparency with the customers on each stage of the deal"/>
                        </div>
                    </div>
                    <div className="steps__item steps__img">
                        <img src="./img/steps1.png" alt="" />
                    </div>
                </div>
                <div className="steps__line">
                    <div className="steps__item steps__img">
                        <img src="./img/steps2.png" alt="" />
                    </div>
                    <div className="steps__item steps__img">
                        <img src="./img/steps3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;