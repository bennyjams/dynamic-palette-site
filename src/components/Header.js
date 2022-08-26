import "../App.css";
import { ReactComponent as Hamburger } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";

export function Header() {
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
                const headerNav = document.querySelector(".n");
              }}
            >
              <Hamburger className="mobile-menu-hamburger" />
              <Close className="mobile-menu-close | visually-hidden" />

              <span className="visually-hidden">Menu</span>
            </button>
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
