import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import styled from 'styled-components';

const Carousel = () => {
  const images = [
    'banner-contactenos.jpg',
    'banner-gmdss.jpg',
    'banner-inicio.jpg',
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const previous = () => {
    setLoaded(false);
    setTimeout(() => {
      const condition = selectedIndex > 0;
      const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 400);
  };

  const next = () => {
    setLoaded(false);
    setTimeout(() => {
      const condition = selectedIndex < images.length - 1;
      const nextIndex = condition ? selectedIndex + 1 : 0;
      setSelectedImage([images[nextIndex]]);
      setSelectedIndex(nextIndex);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  });

  const goToSlide = (slideIndex) => {
    if (selectedIndex !== slideIndex) setLoaded(false);

    setTimeout(() => {
      setSelectedImage(images[slideIndex]);
      setSelectedIndex(slideIndex);
    }, 500);
  };

  return (
    <ImgBackground
      className={styles.container}
      $selectedImage={selectedImage}>
      <div className={styles.carousel}>
        <img
          className={loaded ? `${styles.loaded}` : ''}
          src={require(`../../assets/banners/${selectedImage}`)}
          alt='Banner from Navbridge'
          onLoad={() => setLoaded(true)}
        />
        <button
          className={styles.button_next}
          onClick={next}>
          &#8250;
        </button>
        <button
          className={styles.button_previous}
          onClick={previous}>
          &#8249;
        </button>
        <div className={styles.dots_container}>
          {images.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot_item} ${
                i === selectedIndex ? styles.active : ''
              }`}
              onClick={() => goToSlide(i)}>
              &#9865;
            </div>
          ))}
        </div>
      </div>
    </ImgBackground>
  );
};

export default Carousel;

const ImgBackground = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background-image: url(${(props) =>
      require(`../../assets/banners/${props.$selectedImage}`)});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
  }
`;
