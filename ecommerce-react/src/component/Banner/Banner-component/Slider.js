import React from 'react'

function Slider(props) {
    return (
        <>
            <div className="slider-item">
                <img src={props.img} alt="women's latest fashion sale" className="banner-img" />
                <div className="banner-content">
                    <p className="banner-subtitle">{props.subtitle}</p>
                    <h2 className="banner-title">{props.title}</h2>
                    <p className="banner-text">
                        starting at &dollar; <b>{props.price1}</b>{props.price2}
                    </p>
                    <a href="#" className="banner-btn">Shop now</a>
                </div>
            </div>
        </>
    )
}

export default Slider
