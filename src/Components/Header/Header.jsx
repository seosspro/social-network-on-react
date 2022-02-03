import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className='main-header'>
            <NavLink to='/Profile/'>
                <img
                    className={s.logo}
                    src='https://cdn.logo.com/hotlink-ok/logo-social.png'
                ></img>
            </NavLink>
        </header>
    );
};

export default Header;
