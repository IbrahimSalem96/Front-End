import Showcase from './NewProducts-component/Showcase'
import {
    NewProductsImg1, NewProductsImg2, NewProductsImg4, NewProductsImg5, NewProductsImg6, NewProductsImg7, NewProductsImg8, NewProductsImg9, NewProductsImg3, NewProductsImg10, NewProductsImg11, NewProductsImg12, NewProductsImg13, NewProductsImg14, NewProductsImg15, NewProductsImg16, NewProductsImg17, NewProductsImg18, NewProductsImg19, NewProductsImg20, NewProductsImg21, NewProductsImg22, NewProductsImg23, NewProductsImg24,
} from './Img'
function NewProducts() {
    return (
        <>
            <div className="product-main">
                <h2 className="title">New Products</h2>
                <div className="product-grid">
                    <Showcase img1={NewProductsImg1} img2={NewProductsImg2} title="Mens Winter Leathers Jackets" badge="15%" lap="" category="jacket" price="$48.00" del="$75.00" star1="star-outline" star2="star-outline" />

                    <Showcase img1={NewProductsImg3} img2={NewProductsImg4} title="Pure Garment Dyed Cotton Shirt" badge="sale" lap="angle black" category="shirt" price="$45.00" del="$56.00" star1="star-outline" star2="star-outline" />

                    <Showcase img1={NewProductsImg5} img2={NewProductsImg6} title="MEN Yarn Fleece Full-Zip Jacket" badge="" lap="" category="Jacket" price="$58.00" del="$65.00" star1="star-outline" star2="star-outline" />

                    <Showcase img1={NewProductsImg7} img2={NewProductsImg8} title="Black Floral Wrap Midi Skirt" badge="new" lap="angle pink" category="skirt" price="$25.00" del="$35.00" star1="star" star2="star" />

                    <Showcase img1={NewProductsImg9} img2={NewProductsImg10} title="Casual Men's Brown shoes" badge="" lap="" category="casual" price="$99.00" del="$105.00" star1="star" star2="star" />

                    <Showcase img1={NewProductsImg11} img2={NewProductsImg12} title="Pocket Watch Leather Pouch" badge="sale" lap="angle black" category="watches" price="$150.00" del="$170.00" star1="star-outline" star2="star-outline" />

                    <Showcase img1={NewProductsImg13} img2={NewProductsImg14} title="Smart watche Vital Plus" badge="" lap="" category="watches" price="$100.00" del="$120.00" star1="star" star2="star-outline" />

                    <Showcase img1={NewProductsImg15} img2={NewProductsImg16} title="Womens Party Wear Shoes" badge="sale" lap="angle black" category="party wear" price="$25.00" del="$30.00" star1="star-outline" star2="star-outline" />

                    <Showcase img1={NewProductsImg17} img2={NewProductsImg18} title="Mens Winter Leathers Jackets" badge="" lap="" category="jacket" price="$32.00" del="$45.00" star1="star" star2="star-outline" />

                    <Showcase img1={NewProductsImg19} img2={NewProductsImg20} title="Trekking & Running Shoes - black" badge="sale" lap="angle black" category="sports" price="$58.00" del="$64.00" star1="star-outline" star2="star-outline" />

                    <Showcase img1={NewProductsImg21} img2={NewProductsImg22} title="Men's Leather Formal Wear shoes" badge="" lap="" category="formal" price="$50.00" del="$65.00" star1="star" star2="star-outline" />

                    <Showcase img1={NewProductsImg23} img2={NewProductsImg24} title="Better Basics French Terry Sweatshorts" badge="sale" lap=" angle black" category="shorts" price="$78.00" del="$85.00" star1="star-outline" star2="star-outline" />
                </div>
            </div >
        </>
    )
}

export default NewProducts
