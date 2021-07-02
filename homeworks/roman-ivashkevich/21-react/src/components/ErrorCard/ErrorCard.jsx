import { ReactComponent as ErrorSVG } from '../../assets/error.svg';
import './ErrorCard.css';

const ErrorCard = ({ onClick }) => {
  return (
    <div className="error-card-container">
      <div className="error-wrapper">
        <ErrorSVG className="error-svg" />
        <button type="button" className="error-btn" onClick={onClick}>
          REFRESH
        </button>
      </div>
    </div>
  );
};

export default ErrorCard;
