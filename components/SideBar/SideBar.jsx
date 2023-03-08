import { Icon } from "@iconify/react";
import SearchBar from "components/AppSearchBar/AppSearchBar";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { CATEGORIES } from "utils";
import "./blogsidebar.scss";

function SideBar() {
  const [show, setShow] = useState(false);

  return (
    <Menu
      customBurgerIcon={<Icon icon="octicon:sidebar-collapse-24" />}
      customCrossIcon={<Icon icon="octicon:sidebar-expand-24" />}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      isOpen={show}
      onStateChange={(state) => setShow(state.isOpen)}
    >
      <div className="blog-sidebar-section">
        <SearchBar />
      </div>
      <div className="blog-sidebar-section">
        <h5>Categories</h5>
        <ul>
          {CATEGORIES.map((category, index) => (
            <Link
              onClick={() => setShow(false)}
              key={index}
              to={`/article/search?category=${category.type}`}
            >
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Menu>
  );
}

export default SideBar;
