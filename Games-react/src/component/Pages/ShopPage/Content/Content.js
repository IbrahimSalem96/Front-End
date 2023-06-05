import "./Content.css"
import trendingImag1 from "../../../../assets/trending-01.jpg"
import trendingImag2 from "../../../../assets/trending-02.jpg"
import trendingImag3 from "../../../../assets/trending-03.jpg"
import trendingImag4 from "../../../../assets/trending-04.jpg"
import Items from "./Items.js"

function Content() {

    return (
        <>
            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <a className="is_active" href="#!" data-filter="*">Show All</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".adv">Adventure</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".str">Strategy</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".rac">Racing</a>
                        </li>
                    </ul>
                    <div className="row trending-box">
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                            <Items image={trendingImag1} price="$36" desc="$24" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <Items image={trendingImag2} price="$30" desc="$24" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
                            <Items image={trendingImag3} price="$70" desc="$38" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <Items image={trendingImag4} price="$40" desc="$32" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac str">
                            <Items image={trendingImag4} price="$36" desc="$24" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac adv">
                            <Items image={trendingImag3} price="$35" desc="$26" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac str">
                            <Items image={trendingImag2} price="$27" desc="$20" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 rac adv">
                            <Items image={trendingImag4} price="$55" desc="$40" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
                            <Items image={trendingImag1} price="$36" desc="$24" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <Items image={trendingImag2} price="$30" desc="$24" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                            <Items image={trendingImag3} price="$70" desc="$38" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                        <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                            <Items image={trendingImag4} price="$40" desc="$32" action="Action" assasinCreed="Assasin Creed" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li><a href="#"> &lt; </a></li>
                                <li><a href="#">1</a></li>
                                <li><a className="is_active" href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"> &gt; </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Content
