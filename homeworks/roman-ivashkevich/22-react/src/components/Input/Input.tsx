import React, { FC } from 'react';
import './Input.css';

interface InputProps {
  type: string;
  max: string;
  min: string;
  step: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  max,
  min,
  step,
  disabled,
  onChange,
}) => {
  return (
    <input
      type={type}
      max={max}
      min={min}
      step={step}
      className="range-input"
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;
