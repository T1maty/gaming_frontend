import "../css/main.css";
import inst from "../img/icons/instagram.svg";
import twitter from "../img/icons/twitter.svg";
import github from "../img/icons/gitHub.svg";
import linkedin from "../img/icons/linkedIn.svg";


const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!"><img src={inst} alt="Link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={twitter} alt="Link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={github} alt="Link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={linkedin} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 gaming-industrios.com</p>
                    </div>
                </div>
            </div>
        </footer>

)
}
export default Footer;