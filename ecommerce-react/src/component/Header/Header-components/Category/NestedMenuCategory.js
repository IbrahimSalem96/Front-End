import React from 'react'

function NestedMenuCategory(props) {
    return (
        <>
            <li className="menu-category">
                <a href="#" className="menu-title">{props.title}</a>

                <ul className="dropdown-list">

                    <li className="dropdown-item">
                        <a href="#">{props.part1}</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">{props.part2}</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">{props.part3}</a>
                    </li>

                    <li className="dropdown-item">
                        <a href="#">{props.part4}</a>
                    </li>

                </ul>
            </li>
        </>
    )
}

export default NestedMenuCategory
