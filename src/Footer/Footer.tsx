import "./footer-styles.css";
import { ReactComponent as InstagraIcon } from "./Instagram.svg";
import { ReactComponent as YoutubeIcon } from "./Youtube.svg";
import { ReactComponent as LinkedinIcon } from "./Linkedin.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a SDS2
      <div className="footer-icons">
        <a href="" target="_new">
          <YoutubeIcon />
        </a>
        <a href="" target="_new">
          <InstagraIcon />
        </a>
        <a href="" target="_new">
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
