import { Link } from "react-router-dom";
import Logo from "../logo";

import "./style.scss"


export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Logo />
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </nav>
    </header>
  );
}