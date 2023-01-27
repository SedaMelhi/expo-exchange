import Description from '../description/description';
import { useTranslation } from 'react-i18next';
import './steps.sass';

const Steps = () => {
    const { t, i18n } = useTranslation();
    return(
        <div className="steps" id='deals'>
            <div className="wrap">
                <div className="steps__line">
                    <div className="steps__item steps__description">
                        <div className="steps__text">
                            <Description
                                count={t("steps_count")}
                                title={{text:t("steps_title")}}
                                text={t("steps_text")}/>
                                <button className='btn-video'>
                                    <img src="./img/play.svg" alt="" />
                                    {t("watch")}
                                </button>
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