import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
// import logo from '../../assets/logo-sgv.svg';
import { Link, useMatch } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const isActive = useMatch('/');
  const isActiveAbout = useMatch('/about');
  const isActiveProduct = useMatch('/products');
  const isActiveServices = useMatch('/services');
  const isActiveSbm = useMatch('/sbm');
  const isActiveGmdss = useMatch('/gmdss');
  const isActiveContact = useMatch('/contact');

  const showNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <header className={styles}>
      <h3>Logo</h3>
      <nav className={toggle ? styles.responsive_nav : null}>
        <Link
          className={`${styles.link} ${isActive ? styles.active : null}`}
          to={'/'}
          onClick={showNavbar}>
          INICIO
        </Link>
        <Link
          className={`${styles.link} ${isActiveAbout ? styles.active : null}`}
          to={'/about'}
          onClick={showNavbar}>
          NOSOTROS
        </Link>
        <Link
          className={`${styles.link} ${isActiveProduct ? styles.active : null}`}
          to={'/products'}
          onClick={showNavbar}>
          PRODUCTOS
        </Link>
        <Link
          className={`${styles.link} ${
            isActiveServices ? styles.active : null
          }`}
          to={'/services'}
          onClick={showNavbar}>
          SERVICIOS
        </Link>
        <Link
          className={`${styles.link} ${isActiveSbm ? styles.active : null}`}
          to={'/sbm'}
          onClick={showNavbar}>
          SBM
        </Link>
        <Link
          className={`${styles.link} ${isActiveGmdss ? styles.active : null}`}
          to={'/gmdss'}
          onClick={showNavbar}>
          GMDSS
        </Link>
        <Link
          className={`${styles.contact} ${
            isActiveContact ? styles.active_contact : null
          }`}
          to={'/contact'}
          onClick={showNavbar}>
          CONTACTO
        </Link>
        <button
          className={`${styles['nav-btn']} ${styles['nav-close-btn']}`}
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className={styles['nav-btn']}
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
