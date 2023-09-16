import IconsImg1 from "../../assets/images/icons/dress.svg"
import IconsImg2 from "../../assets/images/icons/jewelry.svg"
import IconsImg3 from "../../assets/images/icons/perfume.svg"
import IconsImg4 from "../../assets/images/icons/cosmetics.svg"
import IconsImg5 from "../../assets/images/icons/glasses.svg"
import IconsImg6 from "../../assets/images/icons/bag.svg"
import IconsImg7 from "../../assets/images/icons/dress.svg"
import IconsImg8 from "../../assets/images/products/1.jpg"
import IconsImg9 from "../../assets/images/products/2.jpg"
import IconsImg10 from "../../assets/images/products/3.jpg"
import IconsImg11 from "../../assets/images/products/4.jpg"
import SidebarList from "./Sidebar-component/SidebarList"
import Showcase from "./Sidebar-component/Showcase"


function Sidebar() {
    return (
        <>
            <div className="sidebar  has-scrollbar" data-mobile-menu="">
                <div className="sidebar-category">
                    <div className="sidebar-top">
                        <h2 className="sidebar-title">Category</h2>
                        <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                            <ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon>
                        </button>
                    </div>
                    <ul className="sidebar-menu-category-list">
                        <SidebarList img={IconsImg1} title="Clothes" product1="Shirt" price1="300" product2="shorts &amp; jeans" price2="60" product3="jacket" price3="50" product4="dress &amp; frock" price4="87" />

                        <SidebarList img={IconsImg2} title="Footwear" product1="Sports" price1="45" product2="Formal" price2="75" product3="Casual" price3="35" product4="Safety Shoes" price4="26" />

                        <SidebarList img={IconsImg3} title="Jewelry" product1="Earrings" price1="46" product2="Couple Rings" price2="73" product3="Necklace" price3="61" product4="" price4="" />

                        <SidebarList img={IconsImg4} title="Perfume" product1="Clothes Perfume" price1="12 pcs" product2="Deodorant" price2="60 pcs" product3="jacket" price3="50 pcs" product4="dress &amp; frock" price4="87 pcs" />

                        <SidebarList img={IconsImg5} title="Cosmetics" product1="Shampoo" price1="68" product2="Sunscreen" price2="46" product3="Body Wash" price3="79" product4="Makeup Kit" price4="23" />

                        <SidebarList img={IconsImg6} title="Glasses" product1="Sunglasses" price1="50" product2="Lenses" price2="48" product3="" price3="" product4="" price4="" />

                        <SidebarList img={IconsImg7} title="Bags" product1="Shopping Bag" price1="62" product2="Gym Backpack" price2="35" product3="Purse" price3="80" product4="Wallet" price4="75" />
                    </ul>

                </div>
                <div className="product-showcase">
                    <h3 className="showcase-heading">best sellers</h3>
                    <div className="showcase-wrapper">
                        <div className="showcase-container">
                            <Showcase img={IconsImg8} title="baby fabric shoes" des="$5.00" price="$4.00" star1="star" star2="star" aria="star" />

                            <Showcase img={IconsImg9} title="men's hoodies t-shirt" des="$17.00" price="$7.00" star1="star" star2="star-half-outline" aria="star half outline" />

                            <Showcase img={IconsImg10} title="girls t-shirt" des="$5.00" price="$3.00" star1="star" star2="star-half-outline" aria="star half outline" />

                            <Showcase img={IconsImg11} title=">woolen hat for men" des="$15.00" price="$12.00" star1="star" star2="star" aria="star" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
