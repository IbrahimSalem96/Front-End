import React from 'react'

function Showcase(props) {
    return (
        <>
            <div className="showcase">
                <a href="#" className="showcase-img-box">
                    <img src={props.img} alt={props.title} width="75" height="75" className="showcase-img" />
                </a>
                <div className="showcase-content">
                    <a href="#">
                        <h4 className="showcase-title">{props.title}</h4>
                    </a>
                    <div className="showcase-rating">
                        <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                        <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                        <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                        <ion-icon name={props.star2} role="img" className="md hydrated" aria-label="star"></ion-icon>
                        <ion-icon name={props.star2} role="img" className="md hydrated" aria-label={props.aria}></ion-icon>
                    </div>
                    <div className="price-box">
                        <del>{props.des}</del>
                        <p className="price">{props.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase
