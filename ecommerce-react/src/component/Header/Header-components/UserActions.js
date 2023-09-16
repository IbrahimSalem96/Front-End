import React from 'react'

function UserActions(props) {

    return (
        <>
            <button className="action-btn">
                <ion-icon name={props.name}></ion-icon>
                <span className={props.in ? "count" : "haddenSpan"}>0</span>

            </button>
        </>
    )
}

export default UserActions
