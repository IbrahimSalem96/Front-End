import React from 'react'

function MenuCategory(props) {
  return (
    <>
      <ul className="dropdown-panel-list">

        <li className="menu-title">
          <a href="#">{props.part1}</a>
        </li>

        <li className="panel-list-item">
          <a href="#">{props.part2}</a>
        </li>

        <li className="panel-list-item">
          <a href="#">{props.part3}</a>
        </li>

        <li className="panel-list-item">
          <a href="#">{props.part4}</a>
        </li>

        <li className="panel-list-item">
          <a href="#">{props.part5}</a>
        </li>

        <li className="panel-list-item">
          <a href="#">{props.part6}</a>
        </li>

        <li className="panel-list-item">
          <a href="#">
            <img src={props.img} alt=" headphone collection" width="250"
              height="119" />
          </a>
        </li>

      </ul>
    </>
  )
}

export default MenuCategory
