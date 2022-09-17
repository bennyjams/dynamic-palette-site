import "../App.css";

import { ReactComponent as Github } from "../images/logo-github.svg";
import { ReactComponent as Css3 } from "../images/logo-css3.svg";
import { ReactComponent as Html5 } from "../images/logo-html5.svg";
import { ReactComponent as ReactLogo } from "../images/logo-react.svg";
import { ReactComponent as Ionic } from "../images/logo-ionic.svg";

export function Footer() {
  return (
    <>
      <footer className="primary-footer | bg-primary-400 text-neutral-400">
        <div className="container">
          <div className="primary-footer-wrapper">
            <div className="footer-logo">LOGO HERE</div>
            <div className="footer-socials">
              <ul
                className="social-list"
                role={"list"}
                aria-label="Social Links"
              >
                <a href="#">
                  <Github className="social-icon" />
                </a>
                <a href="#">
                  <Html5 className="social-icon" />
                </a>
                <a href="#">
                  <Css3 className="social-icon" />
                </a>
                <a href="#">
                  <ReactLogo className="social-icon" />
                </a>
                <a href="https://ionic.io/ionicons">
                  <Ionic className="social-icon" />
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
              <button className="button" data-shadow="none">
                Go
              </button>
            </div>

            <p className="copyright">Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
