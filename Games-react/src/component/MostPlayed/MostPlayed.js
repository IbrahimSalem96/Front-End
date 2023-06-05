import "./MostPlayed.css"
import MostPlayedCard from "../../Data/MostPlayed.js"
import Played from "./Played.js"


const MostPlayed = () => {

    const cards = MostPlayedCard.map(card => {
        return <Played key={card.id} image={card.image} category={card.category} name={card.name} explore={card.explore} />
    })

    return (
        <div className="most-played">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6">
                        <div className="section-heading">
                            <h6>TOP GAMES</h6>
                            <h2>Most Played</h2>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 d-lg-block d-md-block d-none">
                        <div className="main-button">
                            <a href="shop.html">View All</a>
                        </div>
                    </div>
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default MostPlayed





