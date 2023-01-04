import './ProductCardDestructurado.css'

const ProductCardDestructurado = ({img, alt, name, price, description}) =>{ // Dejamos de usar la palabra PROPS y ahora para acceder a esas propiedades, ya no es necesari usar ".props"
    return(
        <section className='ProductCard'>
            <div className='ProductCard__img'>
                <img src={img} alt={alt} />
            </div>
            <div className="ProductCard__namePrice">
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
            <div className="ProductCard__description">
                <p>{description}</p>
            </div>
            <button className='ProductCard__button'>Agregar al carrito</button>
        </section>
    )
}

export default ProductCardDestructurado;