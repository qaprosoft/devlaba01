import React from 'react';
import './Avatar.css';
import PropTypes from "prop-types";

const Avatar = ({ src, callback }) => {
  return (
    <div className="avatar" >
      <img className="avatar-image" src={src} alt="avatar"/>
      <svg className={'avatar-refresh'} onClick={callback} height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg">
        <g id="arrow-refresh-transfer-user_interface-interface"
           data-name="arrow-refresh-transfer-user interface-interface"
        >
          <path d="m59.008 34a2.921 2.921 0 0 0 -2.208-1.023h-.116a3.032 3.032 0 0 0 -2.966 2.616 21.653 21.653 0 0 1 -15.968
          17.678 22.064 22.064 0 0 1 -23.792-8.7 1 1 0 0 1 .822-1.571h5.22a2 2 0 0 0 0-4h-16v16a2 2 0 0 0 4 0v-5.34a1 1 0 0 1
          1.793-.608 28 28 0 0 0 49.874-12.721 2.9 2.9 0 0 0 -.659-2.331z"/>
          <path d="m44 25h16v-16a2 2 0 0 0 -4 0v5.34a1 1 0 0 1 -1.793.608 28 28 0 0 0 -49.853 12.582 3.006 3.006 0 0 0 2.971 3.47 3.029 3.029 0 0 0 2.966-2.588 21.993 21.993 0 0 1 39.751-8.983 1 1 0 0 1 -.822 1.571h-5.22a2 2 0 0 0 0 4z"/>
        </g>
      </svg>
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  callback: PropTypes.func,
};

export default Avatar;