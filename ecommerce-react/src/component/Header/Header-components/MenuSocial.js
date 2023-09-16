function MenuSocial(props) {
    return (
        <>
            <li>
                <a href="#" className="social-link">
                    <ion-icon name={props.icon}></ion-icon>
                </a>
            </li>
        </>
    )
}

export default MenuSocial
