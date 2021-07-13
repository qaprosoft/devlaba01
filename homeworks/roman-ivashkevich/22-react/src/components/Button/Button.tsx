import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: React.ReactChild | React.ReactDOM;
}

const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} className="normal-distribution-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
