import { useEffect, useState } from 'react';

const DelayedImage = ({ src, delay, opacity, children }) => {
  const [loaded, setLoaded] = useState(false);
  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    let timer;

    if (!loaded) {
      timer = setInterval(() => {
        setOpacityValue((prev) => (prev < opacity ? prev + 0.2 : opacity));
      }, 100);
    }

    setTimeout(() => {
      setLoaded(true);
      clearInterval(timer);
    }, delay);

    return () => clearInterval(timer);
  }, [loaded, opacity, delay]);

  return (
    <div
      style={{
        opacity: opacityValue,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        transition: `opacity ${delay / 1000}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default DelayedImage;
