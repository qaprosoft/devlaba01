import React from 'react';
import './ErrorButton.css';
import ErrorImg from '../../assets/error.png'
import Button from '../Button/Button'

const ErrorButton = ({onClick, refreshCard}) => {
  return (
    <button className='refresh-button-card' onClick={onClick}>
      <img src={ErrorImg} alt='error' />
      <Button className='refresh-card' onClick={refreshCard}>
        refresh
      </Button>
    </button>
  );
};

export default ErrorButton;