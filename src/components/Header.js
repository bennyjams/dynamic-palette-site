import "../App.css";
import { useState } from "react";
import { ReactComponent as Hamburger } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";

export function Header() {
  const [navVisible, setNavVisible] = useState(true);

  function HeaderNav() {
    if (!navVisible) {
      return <></>;
    }

    return (
      <>
        <nav className="header-navigation" id="header-navigation">
          <ul aria-label="Primary" role={"list"} className="nav-list">
            <li>
              <a className="nav-item" href="#">
                A
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                B
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                C
              </a>
            </li>
            <li>
              <a className="nav-item" href="#">
                D
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
