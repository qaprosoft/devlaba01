import React from 'react';
import './AddButton.css';

const AddButton = ({ onClick }) => (
  <button className='card-button-add' onClick={onClick} />
);

export default AddButton;