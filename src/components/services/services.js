import { useTranslation } from 'react-i18next';
import Description from '../description/Description';
import Service from './service/Service';
import './services.sass'

const Services = () => {
    const { t, i18n } = useTranslation();
    const servicesData = [
        {
            icon: "./img/icon1.svg",
            title: t("services_one-title"),
            description: t("services_one-text"),
            id: 1,
        },
        {
            icon: "./img/icon2.svg",
            title: t("services_two-title"),
            description: t("services_two-text"),
            id: 2,
        },
        {
            icon: "./img/icon3.svg",
            title: t("services_three-title"),
            description: t("services_three-text"),
            id: 3,
        }
    ]
    return(
        <div className="services" id='services'>
            <div className="wrap">
                <div className="description__wrap">
                    <Description
                        count="1000+ successful deals"
                        title={{text: t("our_services")}}
                        text={t("services_text")}/>
                </div>
                <div className="services__content">
                    <div className="services__left">
                        <img src="./img/services.png" alt="" />
                    </div>
                    <div className="services__right">
                        {
                            servicesData.map(item => 
                                <Service
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    key={item.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;