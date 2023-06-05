import "./CardHero.css"
import featured1Ing from "../../assets/featured-01.png"
import featured2Ing from "../../assets/featured-02.png"
import featured3Ing from "../../assets/featured-03.png"
import featured4Ing from "../../assets/featured-04.png"
import Card from "./Card.js"

const CardHero = () => {

    //All data send Card 
    const mostpopularltems = [
        { id: "most_popularl_tems_0", image: featured1Ing, title: "Free Storage" },
        { id: "most_popularl_tems_1", image: featured2Ing, title: "User More" },
        { id: "most_popularl_tems_2", image: featured3Ing, title: "Reply Ready" },
        { id: "most_popularl_tems_3", image: featured4Ing, title: "Easy Layout" },
    ]

    const Cards = mostpopularltems.map(card => {
        return <Card key={card.id} image={card.image} title={card.title}></Card>
    })

    return (
        <>
            <div className="features" >
                <div className="container">
                    <div className="cardhero">
                        <div className="row gy-5">

                            {Cards}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHero;