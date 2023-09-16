import { Testimonial, Cta, Service } from "./TCS-component/index"


function TCS() {
    return (
        <>
            <div className="container">
                <div className="testimonials-box">
                    <Testimonial />
                    <Cta />
                    <Service />
                </div>
            </div>
        </>
    )
}

export default TCS
