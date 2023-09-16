import React from 'react'

function Showcase(props) {
    return (
        <>
            <div className="showcase">
                <a href="#" className="showcase-img-box">
                    <img src={props.img} alt={props.title} width="70" className="showcase-img" />
                </a>
                <div className="showcase-content">
                    <a href="#">
                        <h4 className="showcase-title">{props.title} </h4>
                    </a>
                    <a href="#" className="showcase-category">{props.category}</a>

                    <div className="price-box">
                        <p className="price">{props.price}</p>
                        <del>{props.des}</del>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Showcase
