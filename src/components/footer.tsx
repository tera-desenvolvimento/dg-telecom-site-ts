import Aligner from "./aligner";

import logoDG from "../img/logo_dg.svg";

import "../style/footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <Aligner direction="horizontal" justify="center">
                <img src={logoDG} alt="logo-dg" className="footer-logo" />
                <div className="menu-column">
                    <a href="#">Início</a>
                    <a href="#">Suporte</a>
                    <a href="#">Planos</a>
                    <a href="#">Social</a>
                </div>
                <div className="menu-column">
                    <a href="#">Contrate aqui</a>
                    <a href="#">Conheça nosso App</a>
                    <a href="#">Dúvidas</a>
                </div>
            </Aligner>

            <small>DG Telecom - 00.000.000/0000-00 - Ilha das Flores SE © Todos os direitos reservados</small>
        </footer>
    )
}

export default Footer;