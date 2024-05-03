import React, { useEffect, useRef } from 'react';

import styles from './Navbar.module.css'
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";




const Navbar = () => {
  const menuIconRef = useRef(null);

  useEffect(() => {
    // Asigna el id 'menu-icon' al div después de que el componente se monta
    if (menuIconRef.current) {
      menuIconRef.current.id = 'menuIcon';
    }
  }, []);

  const menuIconStyles = {
    fontSize: '35px',
    color: 'blue',
    cursor: 'pointer',
    zIndex: 10001,
    display: 'none'
  };

  return (
    <div className={styles.Navbar}>
        <header>
            <a href="#" className={styles.logo}> <i className={styles.icon}><IoHomeSharp /></i><span>Logo</span> </a>
            <ul className={styles.navbar}>
            <li className={`${styles.a} ${styles.active}`}>Home</li>
              <li className={styles.a}>Nosotros</li>
              <li className={styles.a}>Servicios</li>
              <li className={styles.a}>Contacto</li>
              <li className={styles.a}>Blog</li>
            </ul>
            <div className={styles.main}>
              <span className={styles.user}><i><FaUser /></i>Ingresar</span>
              <span className={styles.aa}>Registrarse</span>
              <div ref={menuIconRef}  style={menuIconStyles}> 
      <TiThMenu />
    </div>
            </div>
        </header>

    </div>
  )
}

export default Navbar