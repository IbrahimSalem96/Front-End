import React from 'react'

function CategoryMobile(props) {
    return (
        <>
            <li className="menu-category">
                <a href="#" className="menu-title">{props.title}</a>
            </li>
        </>
    )
}

export default CategoryMobile
