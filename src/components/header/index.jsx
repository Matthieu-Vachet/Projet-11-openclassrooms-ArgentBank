import { Link } from "react-router-dom";

import Logo from "../../assets/argentBankLogo.png";

import "./style.scss"

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;