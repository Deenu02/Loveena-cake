function CakeCard({ name, category, description, price, image }) {
    return (
        <div className="cake-card">
            <div className="cake-img">
                <img src={image} alt={name} />
            </div>
            <div className="cake-body">
                <span className="cake-category">{category}</span>
                <h3 className="cake-name">{name}</h3>
                <p className="cake-desc">{description}</p>
                <div className="cake-footer">
                    <span className="cake-price">${price}</span>
                    <button className="order-btn">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default CakeCard;