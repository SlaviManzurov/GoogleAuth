import './Card.css'


function Card({
    title,
    image,
    description,
}) {
    return (
        <div className = 'card'>
            <img src={image} alt =''/>
            <h3>{title}</h3>
            <p className = 'txt' >{description}</p>
        </div>
    )
}
export default Card;