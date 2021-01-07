import "./footer-styles.css";
import { ReactComponent as InstagramIcon } from "./Instagram.svg";
import { ReactComponent as YoutubeIcon } from "./Youtube.svg";
import { ReactComponent as LinkedinIcon } from "./Linkedin.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a SDS2
      <div className="footer-icons">
        <div>
          <YoutubeIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
