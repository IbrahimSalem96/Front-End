import React from 'react'

function Contact() {
    return (
        <>
            <ul className="footer-nav-list">

                <li className="footer-nav-item">
                    <h2 className="nav-title">Contact</h2>
                </li>

                <li className="footer-nav-item flex">
                    <div className="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>

                    <address className="content">
                        419 State 414 Rte
                        Beaver Dams, New York(NY), 14812, USA
                    </address>
                </li>

                <li className="footer-nav-item flex">
                    <div className="icon-box">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>

                    <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
                </li>

                <li className="footer-nav-item flex">
                    <div className="icon-box">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>

                    <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
                </li>

            </ul>


            <ul className="footer-nav-list">

                <li className="footer-nav-item">
                    <h2 className="nav-title">Follow Us</h2>
                </li>

                <li>
                    <ul className="social-link">

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                    </ul>
                </li>

            </ul>
        </>
    )
}

export default Contact
