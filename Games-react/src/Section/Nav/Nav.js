import "./Nav.css"

const NavList = (props) => {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    );
}

export default NavList
