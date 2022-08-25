import "../App.css";

export function Footer() {
  return (
    <>
      <footer className="primary-footer | bg-primary-400 text-neutral-400">
        <div className="container">
          <div className="primary-footer-wrapper">
            <div className="footer-logo">A</div>
            <div className="footer-socials">
              <ul
                className="social-list"
                role={"list"}
                aria-label="Social Links"
              >
                <a>
                  <svg className="social-icon">
                    <use xlinkHref="#logo-github"></use>
                  </svg>
                </a>
              </ul>
            </div>
            <nav className="footer-nav">
              <ul aria-label="Footer" role={"list"}>
                <li>
                  <a href="#">One</a>
                </li>
                <li>
                  <a href="#">Two</a>
                </li>
                <li>
                  <a href="#">Three</a>
                </li>
                <li>
                  <a href="#">Four</a>
                </li>
                <li>
                  <a href="#">Five</a>
                </li>
                <li>
                  <a href="#">Six</a>
                </li>
                <li>
                  <a href="#">Seven</a>
                </li>
                <li>
                  <a href="#">Eight</a>
                </li>
              </ul>
            </nav>
            <div className="footer-input-wrapper">
              <input className="footer-input" />
              <button className="button">Go</button>
            </div>

            <p className="copyright">Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
