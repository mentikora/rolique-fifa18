import React, { Component } from 'react';
import './styles.css';

class InfoInput extends Component {

  onChange = ({ target: { value } }) => {
    const { onChange } = this.props;

    onChange(value);
  };

  render() {
    const { className, text, disabled } = this.props;

    return (

      <input 
        type="text" 
        className={`info__input ${className}`}
        value={text}
        onChange={this.onChange}
        disabled={disabled}
      />

    )
  }
}

export default InfoInput;