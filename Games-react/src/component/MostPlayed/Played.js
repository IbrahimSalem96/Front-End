
const Played = (props) => {
    return (
        <>
            <div className="col-12 col-lg-2 col-md-6 col-sm-6">
                <div className="item">
                    <div className="thumb">
                        <a href="product-details.html"><img src={props.image} alt="top Game 1" /></a>
                    </div>
                    <div className="down-content">
                        <span className="category">{props.category}</span>
                        <h4>{props.name}</h4>
                        <a href="#">{props.explore}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Played
