import c from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={c.nav}>
            <ul className='main-nav__ul'>
                <NavLink
                    to='/Profile'
                    className={navData => (navData.isActive ? c.active : c.nav)}
                >
                    <li className='main-nav__li'>Моя страница</li>
                </NavLink>
                <li className='main-nav__li'>Друзья</li>
                <NavLink
                    to='/Dialogs'
                    className={navData => (navData.isActive ? c.active : c.nav)}
                >
                    <li className='main-nav__li'>Сообщения</li>
                </NavLink>
                <li className='main-nav__li'>Новости</li>
                <li className='main-nav__li'>Сервисы</li>
                <li className='main-nav__li'>Музыка</li>
                <NavLink
                    to='/Users'
                    className={navData => (navData.isActive ? c.active : c.nav)}
                >
                    <li className='main-nav__li'>Поиск</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default NavBar;
