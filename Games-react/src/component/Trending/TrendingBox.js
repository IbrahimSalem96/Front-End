
const CardTrending = (props) => {
    return (
        <>
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                <div className="item">
                    <div className="thumb">
                        <a href="#"><img src={props.image} alt="trending1 img" /></a>
                        <span className="price"><em> {props.price} </em>  {props.desc} </span>
                    </div>
                    <div className="down-content">
                        <span className="category"> {props.category} </span>
                        <h4> {props.name} </h4>
                        <a href="#"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTrending

