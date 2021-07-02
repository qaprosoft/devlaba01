import './Card.css';
import { ReactComponent as RefreshSvg } from '../../assets/refresh.svg';

const Card = ({ src, onClick, index, loadingCardIndex }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper" onClick={onClick}>
        <img src={src} alt="card" className="card_img" />
        <div
          className={index === loadingCardIndex ? 'loading overlay' : 'overlay'}
        >
          <RefreshSvg />
        </div>
      </div>
    </div>
  );
};

export default Card;
