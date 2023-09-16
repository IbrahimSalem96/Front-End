function Language() {
    return (
        <>
            <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Language</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>
                <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">English</a>
                    </li>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                    </li>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Fren&ccedil;h</a>
                    </li>
                </ul>
            </li>
        </>
    )
}

function Currency() {
    return (
        <>
            <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>
                <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">English</a>
                    </li>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                    </li>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Fren&ccedil;h</a>
                    </li>
                </ul>
            </li>
        </>
    )
}
export { Language, Currency }