import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Footer from "./Footer";

function Product() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Latest Products</h1>
      <hr />
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Product;