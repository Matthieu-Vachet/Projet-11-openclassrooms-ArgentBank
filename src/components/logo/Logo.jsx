import { Link } from "react-router-dom";

import LogoImg from "../../assets/argentBankLogo.webp";
import "./Logo.scss";

export default function Logo() {
    return (
        <Link to="/" className="main-nav-logo">
            <img src={LogoImg} alt="Argent Bank Logo" className="main-nav-logo-image" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    );
}
