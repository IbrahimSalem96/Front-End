import React from 'react'

function NavItem(props) {
    return (
        <>
            <ul className="footer-nav-list">
                <li className="footer-nav-item">
                    <h2 className="nav-title">{props.title}</h2>
                </li>
                <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">{props.link1}</a>
                </li>
                <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">{props.link2}</a>
                </li>
                <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">{props.link3}</a>
                </li>
                <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">{props.link4}</a>
                </li>
                <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">{props.link5}</a>
                </li>
            </ul>
        </>
    )
}

export default NavItem
