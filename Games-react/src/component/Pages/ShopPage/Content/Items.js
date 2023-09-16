const Item = (props) => {
    return (
        <div className="item">
            <div className="thumb">
                <a href="product-details.html"><img src={props.image} alt="image product" /></a>
                <span className="price"><em>{props.price}</em>{props.desc}</span>
            </div>
            <div className="down-content">
                <span className="category">{props.action}</span>
                <h4>{props.assasinCreed}</h4>
                <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
            </div>
        </div>
    )
}

export default Item