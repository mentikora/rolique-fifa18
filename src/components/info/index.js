import React, { Component } from 'react';
import './styles.css';

import InfoInput from './info-field';

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formEditable: false,
      pretitle: 'Current tournament',
      title: 'Rolique Fifa`18',
      subtitle: 'Fri Jun 15, 2018 at 6:30pm',
    };
  }

  ondblclick = () => {
    this.setState({
      formEditable: !this.state.formEditable
    })
  }

  onChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  toggleDisabledState = () => {
    document.querySelectorAll('.info__input')
  }

  render() {
    const { pretitle, title, subtitle, formEditable } = this.state;
    return(

      <div className="info" onDoubleClick={ this.ondblclick }>
        <form 
          className={`info__form ${formEditable ? 'info__form--edit' : ''}`}
        >
          <InfoInput 
            className="info__pretitle"
            text={pretitle}
            onChange={value => this.onChange('pretitle', value)}
            disabled={!formEditable}
          />
          <InfoInput 
            className="info__title"
            text={title}
            onChange={value => this.onChange('title', value)}
            disabled={!formEditable}
          />
          <InfoInput 
            className="info__subtitle"
            text={subtitle}
            onChange={value => this.onChange('subtitle', value)}
            disabled={!formEditable}
          />
          <input 
            type="submit"
            className="info__form-submit"
          />
        </form>
      </div>

    )
  }
}

export default Info;