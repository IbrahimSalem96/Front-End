import bannerImg1 from "../../assets/images/banner-1.jpg"
import bannerImg2 from "../../assets/images/banner-2.jpg"
import bannerImg3 from "../../assets/images/banner-3.jpg"
import Slider from "./Banner-component/Slider"
function Banner() {
    return (
        <>


            <div className="banner">
                <div className="container">
                    <div className="slider-container has-scrollbar">
                        <Slider img={bannerImg1} subtitle="Trending item" title="Women's latest fashion sale" price1="20" price2=".00" />
                        <Slider img={bannerImg2} subtitle="Trending accessories" title="Modern sunglasses" price1="15" price2=".00" />
                        <Slider img={bannerImg3} subtitle="Sale Offer" title="New fashion summer sale" price1="29" price2=".99" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
