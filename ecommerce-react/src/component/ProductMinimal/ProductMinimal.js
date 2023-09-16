import {
    NewImg1, NewImg2, NewImg3, NewImg4, NewImg5, NewImg6, NewImg7, NewImg8, TrendingImg1, TrendingImg2, TrendingImg3, TrendingImg4, TrendingImg5, TrendingImg6, TrendingImg7, TrendingImg8, RatedImg1, RatedImg2, RatedImg3, RatedImg4, RatedImg5, RatedImg6, RatedImg7, RatedImg8,
} from "./img"

import ShowcaseContainer from "./ProductMinimal-component/ShowcaseContainer"
function ProductMinimal() {
    return (
        <>
            <div className="product-minimal">
                <div className="product-showcase">
                    <h2 className="title">New Arrivals</h2>
                    <div className="showcase-wrapper has-scrollbar">
                        <div className="showcase-container">
                            <ShowcaseContainer img={NewImg1} title="Relaxed Short full Sleeve T-Shirt" category="Clothes" price="$45.00" des="$12.00" />

                            <ShowcaseContainer img={NewImg2} title="Girls pnk Embro design Top" category="Clothes" price="$61.00" des="$9.00" />

                            <ShowcaseContainer img={NewImg3} title="Black Floral Wrap Midi Skirt" category="Clothes" price="$76.00" des="$25.00" />

                            <ShowcaseContainer img={NewImg4} title="Pure Garment Dyed Cotton Shirt" category="Mens Fashion" price="$68.00" des="$31.00" />
                        </div>

                        <div className="showcase-container">
                            <ShowcaseContainer img={NewImg5} title="MEN Yarn Fleece Full-Zip Jacket" category="Winter wear" price="$61.00" des="$11.00" />

                            <ShowcaseContainer img={NewImg6} title="Mens Winter Leathers Jackets" category="Winter wear" price="$32.00" des="$20.00" />

                            <ShowcaseContainer img={NewImg7} title="Mens Winter Leathers Jackets" category="Jackets" price="$50.00" des="$25.00" />

                            <ShowcaseContainer img={NewImg8} title="Better Basics French Terry Sweatshorts" category="Shorts" price="$20.00" des="$10.00" />
                        </div>
                    </div>
                </div>

                <div className="product-showcase">
                    <h2 className="title">Trending</h2>
                    <div className="showcase-wrapper  has-scrollbar">
                        <div className="showcase-container">
                            <ShowcaseContainer img={TrendingImg1} title="Running &amp; Trekking Shoes - White" category="Sports" price="$49.00" des="$15.00" />

                            <ShowcaseContainer img={TrendingImg2} title="Trekking &amp; Running Shoes - black" category="Sports" price="$78.00" des="$36.00" />

                            <ShowcaseContainer img={TrendingImg3} title="Womens Party Wear Shoes" category="Party wear" price="$94.00" des="$42.00" />

                            <ShowcaseContainer img={TrendingImg4} title="Sports Claw Women's Shoes" category="Sports" price="$54.00" des="$65.00" />
                        </div>

                        <div className="showcase-container">
                            <ShowcaseContainer img={TrendingImg4} title="Air Trekking Shoes - white" category="Sports" price="$52.00" des="$55.00" />

                            <ShowcaseContainer img={TrendingImg5} title="Boot With Suede Detail" category="boots" price="$20.00" des="$30.00" />

                            <ShowcaseContainer img={TrendingImg7} title="Men's Leather Formal Wear shoes" category="formal" price="$56.00" des="$78.00" />

                            <ShowcaseContainer img={TrendingImg8} title="Casual Men's Brown shoes" category="Casual" price="$50.00" des="$55.00" />
                        </div>
                    </div>
                </div>

                <div className="product-showcase">
                    <h2 className="title">Top Rated</h2>
                    <div className="showcase-wrapper  has-scrollbar">
                        <div className="showcase-container">
                            <ShowcaseContainer img={RatedImg1} title="Pocket Watch Leather Pouch" category="Watches" price="$50.00" des="$34.00" />

                            <ShowcaseContainer img={RatedImg2} title="Silver Deer Heart Necklace" category="Jewellery" price="$84.00" des="$30.00" />

                            <ShowcaseContainer img={RatedImg3} title="Titan 100 Ml Womens Perfume" category="Perfume" price="$42.00" des="$10.00" />

                            <ShowcaseContainer img={RatedImg4} title="Men's Leather Reversible Belt" category="Belt" price="$24.00" des="$10.00" />
                        </div>

                        <div className="showcase-container">
                            <ShowcaseContainer img={RatedImg5} title="platinum Zircon classNameic Ring" category="jewellery" price="$62.00" des="$65.00" />

                            <ShowcaseContainer img={RatedImg6} title="Smart watche Vital Plus" category="watches" price="$56.00" des="$78.00" />

                            <ShowcaseContainer img={RatedImg7} title="shampoo conditioner packs" category="cosmetics" price="$20.00" des="$30.00" />

                            <ShowcaseContainer img={RatedImg8} title="Rose Gold Peacock Earrings" category="jewellery" price="$20.00" des="$30.00" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductMinimal
