import "../App.css";

export function Header() {
  return (
    <>
      <header className="primary-header">
        <div className="container | visually-hidden">
          <div className="nav-wrapper">
            <a href="#">Logo Here</a>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <svg className="icon-hamburger" width={50} height={50}>
                <use xlinkHref="../../images/menu.svg#menu"></use>
              </svg>
              <svg className="icon-close" width={50} height={50}>
                <use xlinkHref="../../images/close.svg#close"></use>
              </svg>

              <span className="visually-hidden">Menu</span>
            </button>
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
