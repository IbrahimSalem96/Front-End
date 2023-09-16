import IconsImg1 from "../../assets/images/icons/dress.svg"
import IconsImg2 from "../../assets/images/icons/coat.svg"
import IconsImg3 from "../../assets/images/icons/glasses.svg"
import IconsImg4 from "../../assets/images/icons/shorts.svg"
import IconsImg5 from "../../assets/images/icons/tee.svg"
import IconsImg6 from "../../assets/images/icons/jacket.svg"
import IconsImg7 from "../../assets/images/icons/watch.svg"
import IconsImg8 from "../../assets/images/icons/hat.svg"
import CategoryItem from "./Category-component/CategoryItem"

function Category() {
    return (
        <>
            <div className="category">
                <div className="container">
                    <div className="category-item-container has-scrollbar">
                        <CategoryItem img={IconsImg1} title="Dress & frock" amount="53" />
                        <CategoryItem img={IconsImg2} title="Winter wear" amount="58" />
                        <CategoryItem img={IconsImg3} title="Glasses & lens" amount="68" />
                        <CategoryItem img={IconsImg4} title="Shorts & jeans" amount="84" />
                        <CategoryItem img={IconsImg5} title="T-shirts" amount="35" />
                        <CategoryItem img={IconsImg6} title="Jacket" amount="16" />
                        <CategoryItem img={IconsImg7} title="Watch" amount="27" />
                        <CategoryItem img={IconsImg8} title="Hat & caps" amount="39" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
