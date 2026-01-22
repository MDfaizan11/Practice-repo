import React, { useState } from "react";
import "./header.css";
import { Menu, X } from "lucide-react";
function Header() {
  const [showMenu, setShowmenu] = useState(false);
  function handleShowClick() {
    setShowmenu(!showMenu);
  }
  return (
    <>
      <header>
        <div>
          <h2>Faizan</h2>
        </div>
        <nav>
          <ul className="Navbar_ui" style={{ right: showMenu ? "0" : "-100%" }}>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
          <div className="menu_icon_div" onClick={handleShowClick}>
            {showMenu ? (
              <X className="close_icon" />
            ) : (
              <Menu className="menu_icon" />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
