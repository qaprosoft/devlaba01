import React, { FC } from 'react';
import './Bar.css';

interface BarProps {
  className?: string;
  height: number;
}

const Bar: FC<BarProps> = ({ className, height }) => {
  return (
    <div
      className={className ? `${className} bar` : 'bar'}
      style={{ height: height }}
    ></div>
  );
};

export default Bar;
