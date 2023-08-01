import "../css/main.css";
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return(<nav className="nav">
        <div className="container">
            <div className="nav-row">
              <NavLink to="/" className="logo"><strong>GAMING</strong> INDUSTRIOS
                  </NavLink>



                <BtnDarkMode/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/"className={({isActive}) => {
                        return isActive ? activeLink : normalLink;
                        }}>
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/xbox"className={({isActive}) => {
                        return isActive ? activeLink : normalLink;
                        }}>
                            XBOX
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/playstation"className={({isActive}) => {
                            return isActive ? activeLink : normalLink;
                        }}>
                            PLAYSTATION
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/pc"className={({isActive}) => {
                            return isActive ? activeLink : normalLink;
                        }}>
                            PC
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/contacts"className={({isActive}) => {
                            return isActive ? activeLink : normalLink;
                        }}>
                            CONTACTS
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/authorization"className={({isActive}) => {
                            return isActive ? activeLink : normalLink;
                        }}>
                            AUTHENTICATION
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/crypto"className={({isActive}) => {
                            return isActive ? activeLink : normalLink;
                        }}>
                            CRYPTO-TRANSACTION
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/drivers"className={({isActive}) => {
                            return isActive ? activeLink : normalLink;
                        }}>
                            DRIVERS
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>)
}
export  default  Navbar;