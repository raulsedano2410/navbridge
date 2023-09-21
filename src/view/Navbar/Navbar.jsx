import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './Navbar.module.css';
// import logo from '../../assets/logo-sgv.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <header className={styles}>
      <h3>Logo</h3>
      <nav className={toggle ? styles.responsive_nav : null}>
        <Link
          to={'/'}
          onClick={showNavbar}>
          INICIO
        </Link>
        <Link
          to={'/about'}
          onClick={showNavbar}>
          NOSOTROS
        </Link>
        <Link
          to={'/products'}
          onClick={showNavbar}>
          PRODUCTOS
        </Link>
        <Link to={'/services'}>SERVICIOS</Link>
        <Link
          to={'/sbm'}
          onClick={showNavbar}>
          SBM
        </Link>
        <Link
          to={'/gmdss'}
          onClick={showNavbar}>
          GMDSS
        </Link>
        <Link
          to={'/contact'}
          onClick={showNavbar}>
          CONTACTENOS
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
