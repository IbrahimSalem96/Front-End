import React from 'react'

function ListLogo(props) {
    return (
        <>
            <li>
                <a href="#" className="social-link">
                    <ion-icon name={props.name}></ion-icon>
                </a>
            </li>
        </>
    )
}

export default ListLogo
