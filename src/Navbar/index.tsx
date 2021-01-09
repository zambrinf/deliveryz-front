import "./navbar-styles.css";
import { ReactComponent as Logo } from "./logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="main-navbar">
        <Logo />
        <div className="logo-text">Deliveryz</div>
      </Link>
    </nav>
  );
}

export default Navbar;
