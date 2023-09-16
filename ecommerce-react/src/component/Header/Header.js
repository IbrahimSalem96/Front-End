import React, { useEffect, useState } from 'react';
import "./Header.css"
import headerIng from "../../assets/images/logo/logo.svg"
import { ListLogo, TopActions, UserActions, Category, MenuCategory, NestedMenuCategory, MenuCategoryMobile, CategoryMobile, Language, Currency, MenuSocial } from "./Header-components/index"
import CategoryImg1 from "../../assets/images/electronics-banner-1.jpg"
import CategoryImg2 from "../../assets/images/mens-banner.jpg"
import CategoryImg3 from "../../assets/images/womens-banner.jpg"
import CategoryImg4 from "../../assets/images/electronics-banner-2.jpg"


function Header() {

    const [getEle, setEle] = useState('')
    const [accordion, setAccordion] = useState([])

    useEffect(() => {
        const headerTop = document.querySelector(".has-scrollbar")
        const accordion = document.querySelectorAll(".accordion-menu")

        setEle(headerTop)
        setAccordion(accordion)
    }, []);


    function OpenMenu() {
        getEle.classList.add('active')
    }
    function CloseMenu() {
        getEle.classList.remove('active')
    }


    accordion.forEach(element => {
        element.addEventListener('click', (e) => {
            accordion.forEach(ele => {
                const nextSibling = ele.nextElementSibling;
                if (nextSibling) {
                    nextSibling.classList.remove("active");
                }
            });

            const nextSibling = e.target.nextElementSibling;
            if (nextSibling) {
                nextSibling.classList.add("active");
            }
        });
    });




    return (
        <>
            <header>
                <div className="header-top">
                    <div className="container">
                        <ul className="header-social-container">
                            <ListLogo name="logo-facebook" />
                            <ListLogo name="logo-twitter" />
                            <ListLogo name="logo-instagram" />
                            <ListLogo name="logo-linkedin" />
                        </ul>
                        <div className="header-alert-news">
                            <p>
                                <b>Free Shipping</b>
                                This Week Order Over - $55
                            </p>
                        </div>
                        <div className="header-top-actions">
                            <TopActions />
                        </div>
                    </div>
                </div>

                <div className="header-main">
                    <div className="container">
                        <a href="#" className="header-logo">
                            <img src={headerIng} alt="Anon's logo" width="120" height="36" />
                        </a>
                        <div className="header-search-container">
                            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                            <button className="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </div>
                        <div className="header-user-actions">
                            <UserActions name="person-outline" in="" />
                            <UserActions name="heart-outline" in="0" />
                            <UserActions name="bag-handle-outline" in="0" />
                        </div>
                    </div>
                </div>

                <nav className="desktop-navigation-menu">
                    <div className="container">
                        <ul className="desktop-menu-category-list">
                            <Category title="Home" />
                            <li className="menu-category">
                                <a href="#" className="menu-title">Categories</a>
                                <div className="dropdown-panel">
                                    <MenuCategory part1="Electronics" part2="Desktop" part3="Laptop" part4="Camera" part5="Tablet" part6="Headphone" img={CategoryImg1} />
                                    <MenuCategory part1="Men's" part2="Formal" part3="Casual" part4="Sports" part5="Jacket" part6="Sunglasses" img={CategoryImg2} />
                                    <MenuCategory part1="Women's" part2="Smart Watch" part3="Casual" part4="Perfume" part5="Cosmetics" part6="Bags" img={CategoryImg3} />
                                    <MenuCategory part1="Electronics" part2="Desktop" part3="Smart TV" part4="Keyboard" part5="Mouse" part6="Microphone" img={CategoryImg4} />
                                </div>
                            </li>
                            <NestedMenuCategory title="Men's" part1="Shirt" part2="Shorts & Jeans" part3="Safety Shoes" part4="Wallet" />
                            <NestedMenuCategory title="Women's" part1="Dress & Frock" part2="Earrings" part3="Necklace" part4="Makeup Kit" />
                            <NestedMenuCategory title="Jewelry" part1="Earrings" part2="Couple Rings" part3="Necklace" part4="Bracelets" />
                            <NestedMenuCategory title="Perfume" part1="Clothes Perfume" part2="Deodorant" part3="Flower Fragrance" part4="Air Freshener" />
                            <Category title="Perfume" />
                            <Category title="Hot Offers" />
                        </ul>
                    </div>
                </nav>

                <div className="mobile-bottom-navigation">
                    <button className="action-btn" onClick={OpenMenu}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                    <button className="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>
                        <span className="count">0</span>
                    </button>
                    <button className="action-btn">
                        <ion-icon name="home-outline"></ion-icon>
                    </button>
                    <button className="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>
                        <span className="count">0</span>
                    </button>
                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>
                </div>

                <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
                    <div className="menu-top">
                        <h2 className="menu-title">Menu</h2>
                        <button className="menu-close-btn" onClick={CloseMenu} data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>
                    <ul className="mobile-menu-category-list">
                        <CategoryMobile title="Home" />
                        <MenuCategoryMobile title="Men's" part1="Shirt" part2="Shorts & Jeans" part3="Safety Shoes" part4="Wallet" />
                        <MenuCategoryMobile title="Jewelry" part1="Earrings" part2="Couple Rings" part3="Necklace" part4="Bracelets" />
                        <MenuCategoryMobile title="Perfume" part1="Clothes Perfume" part2="Deodorant" part3="Flower Fragrance" part4="Air Freshener" />
                        <CategoryMobile title="Blog" />
                        <CategoryMobile title="Hot Offers" />
                    </ul>
                    <div className="menu-bottom">
                        <ul className="menu-category-list">
                            <Language />
                            <Currency />
                        </ul>

                        <ul className="menu-social-container">
                            <MenuSocial icon="logo-facebook" />
                            <MenuSocial icon="logo-twitter" />
                            <MenuSocial icon="logo-instagram" />
                            <MenuSocial icon="logo-linkedin" />
                        </ul>
                    </div>
                </nav>

            </header >
        </>
    )
}

export default Header
