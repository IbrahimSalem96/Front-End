import testimonial from "../../../assets/images/testimonial-1.jpg"
import quotation from "../../../assets/images/icons/quotes.svg"

function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <h2 className="title">testimonial</h2>
                <div className="testimonial-card">
                    <img src={testimonial} alt="alan doe" className="testimonial-banner" width="80"
                        height="80" />
                    <p className="testimonial-name">Alan Doe</p>
                    <p className="testimonial-title">CEO & Founder Invision</p>
                    <img src={quotation} alt="quotation" className="quotation-img" width="26" />
                    <p className="testimonial-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                        dolor dolor sit amet.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Testimonial
