import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const url = 'https://raw.githubusercontent.com/mkatay/json-tours/main/tours';

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setIsAnimated(true), 500);

    return () => clearTimeout(id);
  }, []);

  const animatedStyle = {
    opacity: isAnimated ? 1 : 0,
    position: 'absolute',
    fontSize: '3rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    color: 'white',
    bottom: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) ${
      isAnimated ? 'translateX(0)' : 'translateX(-1500px'
    }`,
    transition: 'opacity 1s, transform 2s',
  };

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      try {
        const response = await axios(`${url}`);
        setTours(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  const tour = tours.length > 0 ? tours.filter((tour) => tour.id === id) : null;

  if (loading) return <div>Loading...</div>;

  if (!tour) {
    return <div>There is nothing...</div>;
  }

  const { name, info, image, price } = tour[0];
  const truncatedText = info?.substring(0, 150);

  return (
    <div className="tour-container">
      <h1 style={animatedStyle}>Discover Me</h1>
      <article className="tour-page">
        <img src={image} alt={name} loading="lazy" />
        <h3>{name}</h3>
        <p>{truncatedText}</p>
        <small>{price} $</small>
        <Link to="/tours">Back</Link>
      </article>
    </div>
  );
};

export default Tour;
