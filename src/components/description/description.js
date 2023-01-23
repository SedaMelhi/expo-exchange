import './description.sass'

const Description = ({count, title, text}) => {
    return(
        <div className="description">
            <div className="description__count">{count}</div>
            <div className="description__title">{title.span ? <span>{title.span}</span> : ""} {title.text}</div>
            <div className="description__text">{text}</div>
        </div>
    )
}

export default Description;