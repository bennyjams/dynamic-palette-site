import "../App.css";

import { setPalette } from "../App";

import { useState } from "react";
import { ReactComponent as Hamburger } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as IceCream } from "../images/theme-logos/ice-cream.svg";
import { ReactComponent as Rocket } from "../images/theme-logos/rocket.svg";
import { ReactComponent as Leaf } from "../images/theme-logos/leaf.svg";
import { ReactComponent as Business } from "../images/theme-logos/business.svg";

export function Header() {
  const [navVisible, setNavVisible] = useState(true);

  const clickedSVG = (parameter) => (event) => {
    setPalette(parameter);
  };

  function HeaderNav() {
    let navClass = "header-navigation";
    if (!navVisible) {
      navClass += " | hide-small";
    }

    return (
      <>
        <nav className={navClass} id="header-navigation">
          <ul aria-label="Primary" role={"list"} className="nav-list">
            <li>
              <a className="nav-item" href="#">
                <Rocket className="nav-svg" onClick={clickedSVG("standard")} />
              </a>
            </li>
            <li>
              <a
                className="nav-item"
                // href="#"
              >
                <IceCream className="nav-svg" onClick={clickedSVG("candy")} />
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                <Leaf className="nav-svg" onClick={clickedSVG("forest")} />
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                <Business
                  className="nav-svg"
                  onClick={clickedSVG("business")}
                />
              </a>
            </li>
          </ul>
          <button className="button | display-sm-none">Let's Go!</button>
        </nav>
      </>
    );
  }

  function MobileMenuIcon() {
    if (navVisible) {
      return <Close className="mobile-menu-close" />;
    }
    return <Hamburger className="mobile-menu-hamburger" />;
  }

  return (
    <>
      <header className="primary-header">
        <div className="container">
          <div className="nav-wrapper">
            <a className="header-logo | text-primary-400" href="#">
              Logo Here
            </a>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded="false"
              onClick={() => {
                setNavVisible(!navVisible);
              }}
            >
              <span className="visually-hidden">Menu</span>
              <MobileMenuIcon />
            </button>

            <HeaderNav />

            <div className="theme-menu-wrapper" id="theme-menu-wrapper">
              <ul
                aria-label="Primary"
                role={"list"}
                className="theme-menu"
              ></ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
