import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faReact,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noreferrer"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faReact} size="2x" />
        </a>
        <a
          href="https://twitter.com/firebase"
          className="twitter social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://firebase.google.com/docs"
          className="instagram social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
