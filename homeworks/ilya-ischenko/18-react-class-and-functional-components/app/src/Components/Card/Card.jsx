import React, { Component } from 'react';

import './Card.css';
import refresfIcon from './../../assets/001-refresh.svg';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div
          onClick={this.props.onClick}
          className="card__inner"
          style={{ backgroundImage: `url(${this.props.img.url})` }}
        >
          <div className="refresh">
            <img className="refresh__icon" src={refresfIcon} alt="refresh" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
