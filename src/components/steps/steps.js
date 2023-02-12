import Description from '../description/Description';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './steps.sass';

const Steps = () => {
    const { t, i18n } = useTranslation();
    const [btnClass, setBtnClass] = useState("btn-video")
    setTimeout(() => setBtnClass("btn-video"), 2000)
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
                                <button className={btnClass} onClick={() => setBtnClass(btnClass + " btn-video_show")}>
                                    <img src="./img/play.svg" alt="" />
                                    {t("watch")}
                                    <div className="btn-video__soon">{t("soon")}...</div>
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