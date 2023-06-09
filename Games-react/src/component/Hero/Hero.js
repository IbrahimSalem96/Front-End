import "./Hero.css"
import heroSection from "../../assets/banner-image.jpg";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <h6>Welcome to lugx</h6>
                                <h2>BEST GAMING SITE EVER!</h2>
                                <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword" />
                                        <button role="button">Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 offset-lg-2">
                            <div className="right-image">
                                <img src={heroSection} className="rounded-5" alt="hero Section" />
                                <span className="price">$22</span>
                                <span className="offer">-40%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;