import React from 'react';
import banner from '../../assets/banner-barco.jpg';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container_banner}>
      <img
      className={styles.banner}
        src={banner}
        alt='Banner from NAV BRIDGE SERVICE'
      />
    </div>
  );
};

export default Home;
