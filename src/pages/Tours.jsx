import { useEffect, useState } from 'react';
import { getData } from '../utils/utils';
import TourCard from '../components/TourCard';

const url = 'https://raw.githubusercontent.com/mkatay/json-tours/main/tours';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      getData(url, setTours);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  console.log(tours);
  return (
    <section className="tours-section">
      <h2>Actual Tours</h2>
      <div className="tours-grid">
        {tours.map((tour) => {
          return <TourCard key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
