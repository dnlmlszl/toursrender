import { Link } from 'react-router-dom';

const TourCard = ({ id, name, info, image, price }) => {
  const truncatedText = info.substring(0, 150);
  return (
    <article className="tour-card">
      <img src={image} alt={name} loading="lazy" />
      <h3>{name}</h3>
      <p>{truncatedText}</p>
      <small>{price} $</small>
      <Link to={`/tour/${id}`}>Details</Link>
    </article>
  );
};

export default TourCard;
