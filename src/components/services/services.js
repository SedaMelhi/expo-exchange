import Description from '../description/description'
import Service from './service/service';
import './services.sass'

const servicesData = [
    {
        icon: "./img/icon1.svg",
        title: "Easy deal administration",
        description: "We have automated the process of transactions and interaction between the sides of the deal. Active deals, requests, history are all available after completing the verification",
        id: 1,
    },
    {
        icon: "./img/icon2.svg",
        title: "Two types of deal",
        description: "You can enter deals both as a client and as a cash holder. It is also possible to transfer cryptocurrency if you do not have cash. The platform guarantees secure transactions",
        id: 2,
    },
    {
        icon: "./img/icon3.svg",
        title: "Fast feedback and support",
        description: "If there is any concern regarding the application status or the deal details you can always get an answer from our support centre",
        id: 3,
    }
]


const Services = () => {
    return(
        <div className="services">
            <div className="wrap">
                <div className="description__wrap">
                    <Description
                        count="1000+ successful deals"
                        title={{text: "Our services"}}
                        text="A platform for both clients and cash holders with step by step deal instructions, chat for better communication and application status tracking"/>
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