import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth <= 1090);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuIcon(window.innerWidth <= 1090);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuIconStyles = {
    fontSize: '35px',
    color: 'blue',
    cursor: 'pointer',
    zIndex: 10001,
    display: showMenuIcon ? 'block' : 'none'
  };

  return (
    <div className={styles.Navbar}>
      <header>
        <a href="#" className={styles.logo}>
        
          <span><img src="/Logo.png" width={70} alt="" /></span>
        </a>
        <ul className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
          <li className={`${styles.a} ${styles.active}`}>Home</li>
          <li className={styles.a}>Nosotros</li>
          <li className={styles.a}>Servicios</li>
          <li className={styles.a}>Contacto</li>
          <li className={styles.a}>Blog</li>
        </ul>
        <div className={styles.main}>
          <span className={styles.user}>
            <FaUser className={styles.icon} />
            Ingresar
          </span>
          <span className={styles.aa}>Registrarse</span>
          <div onClick={toggleMenu} style={menuIconStyles}>
            <TiThMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
