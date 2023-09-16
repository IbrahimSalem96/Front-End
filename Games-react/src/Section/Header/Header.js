import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import "./Header.css"
import Logo from '../../assets/logo.png'
import NavList from "../Nav/Nav.js"

const Header = () => {

    const [Color, setColor] = useState(false);

    function changeColor() {
        if (window.scrollY >= 150) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)


    return (
        <>
            <div className={Color ? "  top-scroll nav-bg" : "  top-scroll"}>
                <nav className="navbar navbar-expand-lg  ">
                    <div className="container-fluid" style={{ background: "#0071f8" }}>
                        <Link to="/" className="navbar-brand " aria-current="page"><img src={Logo} alt="Logo website" /></Link>

                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-white justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <NavList>
                                    {/* No reload pages */}
                                    <Link to="/" className="nav-link active text-white ps-3 pe-3" aria-current="page">Home</Link>
                                    {/* reload page */}
                                    {/* <a className="nav-link active text-white ps-3 pe-3" aria-current="page" href="/">Home</a> */}
                                </NavList>
                                <NavList>
                                    <Link to="/Shop" className="nav-link text-white ps-3 pe-3">Our Shop</Link>
                                </NavList>
                                <NavList>
                                    <Link to="/Product" className="nav-link text-white ps-3 pe-3">Product Details</Link>
                                </NavList>
                                <NavList>
                                    <Link to="/ContactUS" className="nav-link text-white ps-3 pe-3">Contact Us</Link>
                                </NavList>
                                <NavList>
                                    <Link to="/ContactUS" className="nav-link text-white ps-3 pe-3 sing" >SIGN IN</Link>
                                </NavList>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;

