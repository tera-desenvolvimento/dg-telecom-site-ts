import logoDG from "../img/logo_dg.svg";
import "../style/navbar.css";

function Navbar() {
    return(
        <div className="header-container">
            <img src={logoDG} alt="logo-menu" className="logo-menu" />

            <nav className="menu-nav">
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#planos">Planos</a>
                    </li>
                    <li className="menu-item">
                        <a href="#social">Social</a>
                    </li>
                    <li className="menu-item">
                        <a href="#suporte">Suporte</a>
                    </li>
                    <li className="menu-item">
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;