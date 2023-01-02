import './ProductCard.css'

const ProductCard = (props) =>{
    return(
        <section className='ProductCard'>
            <div className='ProductCard__img'>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="ProductCard__namePrice">
                <h2>{props.name}</h2>
                <h3>${props.price}</h3>
            </div>
            <div className="ProductCard__description">
                <p>{props.description}</p>
            </div>
            <button className='ProductCard__button'>Agregar al carrito</button>
        </section>
    )
}

export default ProductCard;