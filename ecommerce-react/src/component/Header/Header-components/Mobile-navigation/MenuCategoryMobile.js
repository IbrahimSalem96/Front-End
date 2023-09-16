import React from 'react'

function MenuCategoryMobile(props) {
    return (
        <>

            <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">{props.title}</p>

                    <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">{props.part1}</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">{props.part2}</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">{props.part3}</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">{props.part4}</a>
                    </li>

                </ul>

            </li>

        </>
    )
}

export default MenuCategoryMobile
