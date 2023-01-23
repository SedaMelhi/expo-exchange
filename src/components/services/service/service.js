import './service.sass';

const Service = ({icon, title, description}) => {
    return(
        <div className="service">
            <div className="service__icon">
                <img src={icon} alt="" />
            </div>
            <div className="service__text">
                <div className="service__title">{title}</div>
                <div className="service__description">{description}</div>
            </div>
        </div>
    )
}

export default Service;