import { FooterCategory, NavItem, Contact } from './Footer-component/index'

function Footer() {
    return (
        <>
            <footer>

                <div className="footer-category">
                    <div className="container">
                        <h2 className="footer-category-title">Brand directory</h2>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">Fashion :</h3>
                            <FooterCategory link="T-shirt" />
                            <FooterCategory link="Shirts" />
                            <FooterCategory link="shorts & jeans" />
                            <FooterCategory link="jacket" />
                            <FooterCategory link="dress & frock" />
                            <FooterCategory link="innerwear" />
                            <FooterCategory link="hosiery" />
                        </div>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">footwear :</h3>
                            <FooterCategory link="sport" />
                            <FooterCategory link="formal" />
                            <FooterCategory link="Boots" />
                            <FooterCategory link="cowboy shoes" />
                            <FooterCategory link="safety shoes" />
                            <FooterCategory link="Party wear shoes" />
                            <FooterCategory link="Branded" />
                            <FooterCategory link="Firstcopy" />
                            <FooterCategory link="Long shoes" />

                        </div>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">jewellery :</h3>
                            <FooterCategory link="Necklace" />
                            <FooterCategory link="Earrings" />
                            <FooterCategory link="Couple rings" />
                            <FooterCategory link="Pendants" />
                            <FooterCategory link="Crystal" />
                            <FooterCategory link="Bangles" />
                            <FooterCategory link="bracelets" />
                            <FooterCategory link="nosepin" />
                            <FooterCategory link="chain" />
                            <FooterCategory link="Earrings" />
                            <FooterCategory link="Couple rings" />
                        </div>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">cosmetics :</h3>
                            <FooterCategory link="Shampoo" />
                            <FooterCategory link="Bodywash" />
                            <FooterCategory link="Facewash" />
                            <FooterCategory link="makeup kit" />
                            <FooterCategory link="liner" />
                            <FooterCategory link="lipstick" />
                            <FooterCategory link="prefume" />
                            <FooterCategory link="Body soap" />
                            <FooterCategory link="scrub" />
                            <FooterCategory link="hair gel" />
                            <FooterCategory link="hair colors" />
                            <FooterCategory link="hair dye" />
                            <FooterCategory link="sunscreen" />
                            <FooterCategory link="skin loson" />
                            <FooterCategory link="liner" />
                            <FooterCategory link="lipstick" />
                        </div>
                    </div>
                </div>
                <div className="footer-nav">
                    <div className="container">
                        <NavItem title="Popular Categories" link1="Fashion" link2="Electronic" link3="Cosmetic" link4="Health" link5="Watches" />

                        <NavItem title="Products" link1="Prices drop" link2="New products" link3="Best sales" link4="Contact us" link5="Sitemap" />

                        <NavItem title="Our Company" link1="Delivery" link2="Legal Notice" link3="Terms and conditions" link4="About us" link5="Secure payment" />

                        <NavItem title="Services" link1="Prices drop" link2="New products" link3="Best sales" link4="Contact us" link5="Sitemap" />

                        <Contact />

                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <img src={require('../../assets/images/payment.png')} alt="payment method" className="payment-img" />
                        <p className="copyright">
                            Designed by &#128147; &#128147; <a href="#">Ibrahim Salem</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
