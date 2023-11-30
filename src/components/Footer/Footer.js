import "./Footer.css"
import linkedin from "./svg/linkedin.png"
import github from "./svg/github.png"
import gmail from "./svg/sobre.png"

const Footer = ()=> {
    return(
        <footer className="footer" id="contactos">
            <hr className="footer__hr"></hr>
            <ul className="footer__ul">
                <li className="footer__li"><a className="footer__a" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tobias-guerrero-dev/"><img className="footer__icon" src={linkedin} alt="linkedinIcon" /></a></li>
                <li className="footer__li"><a className="footer__a" rel="noreferrer" target="_blank" href="https://github.com/TobiasGuerrero"><img className="footer__icon" src={github} alt="githubIcon" /></a></li>
                <li className="footer__li"><a className="footer__a" rel="noreferrer" target="_blank" href="mailto:tobiasguerrerodev@gmail.com"><img className="footer__icon" src={gmail} alt="emailIcon" /></a></li>
            </ul>
            <hr className="footer__hr"></hr>
            <p>&copy; 2023 Tobias Guerrero. Todos los derechos reservados</p>
        </footer>
    );
}

export default Footer