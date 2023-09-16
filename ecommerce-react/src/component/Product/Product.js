import Sidebar from "../CategorySidebar/Sidebar"
import ProductMinimal from "../ProductMinimal/ProductMinimal"
import ProductFeatured from "../ProductFeatured/ProductFeatured"
import NewProducts from "../NewProducts/NewProducts"


function Product() {
    return (
        <>
            <div className="product-container">
                <div className="container">
                    <Sidebar />
                    <div className="product-box">
                        <ProductMinimal />
                        <ProductFeatured />
                        <NewProducts />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
