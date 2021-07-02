import './AddBtn.css';
import { ReactComponent as SpinnerSVG } from '../../assets/spinner.svg';

const AddBtn = ({ onClick, isPending, isError }) => {
  return (
    <div className="add-btn-container" onClick={onClick}>
      <div className={isError ? 'add-btn-wrapper _hide' : 'add-btn-wrapper'}>
        {isPending ? (
          <SpinnerSVG className="spinner" style={{ fill: '#5e217a' }} />
        ) : (
          <div className="line" />
        )}
      </div>
    </div>
  );
};

export default AddBtn;
