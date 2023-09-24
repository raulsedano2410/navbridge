import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';

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
    }, 300);
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
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.container}>
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
      </div>
    </div>
  );
};

export default Carousel;

// const selectNewImage = (index, images, next = true) => {
//   const condition = next
//     ? selectedIndex < images.length - 1
//     : selectedIndex > 0;

//   const nextIndex = next
//     ? condition
//       ? selectedIndex + 1
//       : 0
//     : condition
//     ? selectedIndex - 1
//     : images.length - 1;
//     setSelectedImage(images[nextIndex])
//     setSelectedIndex(nextIndex)
// };
