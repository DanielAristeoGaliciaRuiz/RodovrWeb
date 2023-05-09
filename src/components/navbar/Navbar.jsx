import React, { useState } from "react";
import "./navbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import {GiSurferVan} from 'react-icons/gi'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [active, setActive] = useState("sectionsContainer");
  const [navbar, setNavbar] = useState(false)

  const showMenu = () => {
    setActive("sectionsContainer showed");
    console.log(active);
  };

  const hideMenu = () => {
    setActive("sectionsContainer");
  };

  const showNavbar =()=>{
    if(window.scrollY >= 88){
      setNavbar(true)
    }else{
      setNavbar(false)
  }
}

window.addEventListener('scroll', showNavbar)

  return (
    <section className={navbar? 'navbar-section active': 'navbar-section'}>
      <div className="navbarContainer">
        <div className="logoContainer">
        <Link to='home' smooth={true} duration={500}>
          <GiSurferVan className={navbar?'logoIcon active':'logoIcon'}/>
          </Link>
        </div>

        <div className={active}>
          <ul className="navList">
          <Link to='home' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItemMobile'}>Inicio</li>
            </Link>
            <Link to='tours' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItemMobile'}>Tours</li>
            </Link>
            <Link to='reasons' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItemMobile'}>¿Por qué RodoVR?</li>
            </Link>
            <Link to='about' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItemMobile'}>Nuestro Servicio</li>
            </Link>
            <Link to="info" smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItemMobile'}>Contacto</li>
            </Link>
          </ul>
          <div className="closeMenu">
            <AiOutlineClose onClick={hideMenu} className="icon" />
          </div>
        </div>

          <ul className={navbar?'navListDesktopView active':'navListDesktopView'}>
          <Link to='home' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItem'}>Inicio</li>
            </Link>
            <Link to='tours' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItem'}>Tours</li>
            </Link>
            <Link to='reasons' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItem'}>¿Por qué RodoVR?</li>
            </Link>
            <Link to='about' smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItem'}>Nuestro Servicio</li>
            </Link>
            <Link to="info" smooth={true} duration={500}>
            <li className={navbar?' activeItem':'navItem'}>Contacto</li>
            </Link>
            
          </ul>

        <div className="iconsCointainer">
          <div className="darkMode">
            <CgDarkMode className={navbar?'darkModeIcon active':'darkModeIcon'} />
          </div>

          <div className="openMenu" onClick={showMenu}>
            <BiMenuAltLeft className={navbar?' activeItem':'icon'} />
          </div>

        </div>

        </div>
    </section>
  );
};

export default Navbar;
