import "./Trending.css"
import TrendingGames from "../../Data/TrendingGames.js"
import CardTrending from "./TrendingBox.js"

const Trending = () => {

    const cards = TrendingGames.map(card => {
        return <CardTrending key={card.id} image={card.image} price={card.price} desc={card.desc} category={card.category} name={card.name} />
    })

    return (
        <div className="Trending">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6">
                        <div className="section-heading">
                            <h6>Trending</h6>
                            <h2>Trending Games</h2>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 d-lg-block d-md-block d-none">
                        <div className="main-button">
                            <a href="#">View All</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default Trending
