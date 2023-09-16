
function SidebarList(props) {

  function openList() {
    const menuCategories = document.querySelectorAll(".sidebar-menu-category");

    menuCategories.forEach((category) => {
      category.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event propagation
        const submenuList = category.querySelector(".sidebar-submenu-category-list");
        submenuList.classList.toggle("active");
      });

    });
  }

  return (
    <>
      <li className="sidebar-menu-category" onClick={openList} >

        <button className="sidebar-accordion-menu" data-accordion-btn="">

          <div className="menu-title-flex">
            <img src={props.img} alt="clothes" width="20" height="20" className="menu-title-img" />

            <p className="menu-title">{props.title}</p>
          </div>

          <div>
            <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
          </div>

        </button>

        <ul className="sidebar-submenu-category-list" data-accordion="">

          <li className="sidebar-submenu-category">
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{props.product1}</p>
              <data value={props.price1} className="stock" title="Available Stock">{props.price1}</data>
            </a>
          </li>

          <li className="sidebar-submenu-category">
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{props.product2} {props.product2And ? '&amp; ${{props.product2And}}' : " "} </p>
              <data value={props.price2} className="stock" title="Available Stock">{props.price2}</data>
            </a>
          </li>

          <li className="sidebar-submenu-category">
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{props.product3}</p>
              <data value={props.price3} className="stock" title="Available Stock">{props.price3}</data>
            </a>
          </li>

          <li className="sidebar-submenu-category">
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{props.product4} {props.product4And ? '&amp; ${{props.product4And}}' : " "}</p>
              <data value={props.price4} className="stock" title="Available Stock">{props.price4}</data>
            </a>
          </li>

        </ul>

      </li>
    </>
  )
}

export default SidebarList
