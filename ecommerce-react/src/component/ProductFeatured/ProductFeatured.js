import FeaturedInm1 from '../../assets/images/products/shampoo.jpg'
import FeaturedInm2 from '../../assets/images/products/jewellery-1.jpg'
import ShowcaseFeatured from './ProductFeatured-component/ShowcaseFeatured'

function ProductFeatured() {
    return (
        <>


            <div className="product-featured">
                <h2 className="title">Deal of the day</h2>
                <div className="showcase-wrapper has-scrollbar">
                    <ShowcaseFeatured img={FeaturedInm1} title="shampoo, conditioner & facewash packs" desc="Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor" price="$150.00" del="$200.00" wrapper="20" wrapper1="40" />
                    <ShowcaseFeatured img={FeaturedInm2} title="Rose Gold diamonds Earring" desc="Lorem ipsum dolor sit amet consectetur Lorem ipsumdolor dolor sit amet consectetur Lorem ipsum dolor" price="$1990.00" del="$2000.00" wrapper="15" wrapper1="40" />

                </div>




            </div >
        </>
    )
}
export default ProductFeatured
