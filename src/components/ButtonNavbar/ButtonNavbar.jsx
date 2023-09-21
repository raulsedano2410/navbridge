import React from 'react';
import styles from './ButtonNavbar.module.css';
import { useNavigate } from 'react-router-dom';

const ButtonNavbar = ({ route, name }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(route);
  };
  return (
    <button
      // className={styles.button}
      onClick={handleRoute}>
      {name}
    </button>
  );
};

export default ButtonNavbar;
