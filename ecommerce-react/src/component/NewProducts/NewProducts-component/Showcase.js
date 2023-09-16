function Showcase(props) {
    return (
        <>
            <div className="showcase">
                <div className="showcase-banner">
                    <img src={props.img1} alt={props.title} width="300"
                        className="product-img default" />
                    <img src={props.img2} alt={props.title} width="300"
                        className="product-img hover" />
                    <p className={`showcase-badge ${props.lap}`}>{props.badge}</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>
                        <button className="btn-action">
                            <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button className="btn-action">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                        <button className="btn-action">
                            <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <div className="showcase-content">
                    <a href="#" className="showcase-category">{props.category}</a>
                    <a href="#">
                        <h3 className="showcase-title">{props.title}</h3>
                    </a>
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name={props.star1}></ion-icon>
                        <ion-icon name={props.star2}></ion-icon>
                    </div>
                    <div className="price-box">
                        <p className="price">{props.price}</p>
                        <del>{props.del}</del>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Showcase
