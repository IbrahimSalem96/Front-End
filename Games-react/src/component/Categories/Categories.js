import "./Categories.css"
import categoriesImg1 from "../../assets/categories-01.jpg"
import categoriesImg2 from "../../assets/categories-02.jpg"
import categoriesImg3 from "../../assets/categories-03.jpg"
import categoriesImg4 from "../../assets/categories-04.jpg"
import categoriesImg5 from "../../assets/categories-05.jpg"

import Category from "./Category.js"

const Categories = () => {
    return (
        <>
            <div className="section categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Categories</h6>
                                <h2>Top Categories</h2>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <Category image={categoriesImg1} status="Action" />
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <Category image={categoriesImg2} status="Action" />
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <Category image={categoriesImg3} status="Action" />
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <Category image={categoriesImg4} status="Action" />
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <Category image={categoriesImg5} status="Action" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;