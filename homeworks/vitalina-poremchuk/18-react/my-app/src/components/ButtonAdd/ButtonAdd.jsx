import React, { Component } from 'react';
import './ButtonAdd.scss';

class ButtonAdd extends Component {
  render() {
    return <button className='button__add' onClick={this.props.onClick} />;
  }
}
export default ButtonAdd;
