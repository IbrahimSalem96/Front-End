import "./CardHero.css"

const Card = (props) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-3">
                <a href="#" key={props.id}>
                    <div className="item">
                        <div className="image">
                            <img src={props.image} alt="featured 1" />
                        </div>
                        <h4>{props.title}</h4>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Card;






