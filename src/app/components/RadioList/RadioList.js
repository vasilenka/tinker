import styles from './RadioList.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Radio from './../Radio/Radio';

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selected
    };
  }

  handleClick = value => {
    this.setState({
      ...this.state,
      value: value
    });
  };

  handleFocus = e => {
    console.log('focusing!');
  };

  handleChange = e => {
    console.log(e.target);
  };

  render() {
    let {
      header,
      options,
      selected,
      id,
      value,
      name,
      children,
      className,
      ...restProps
    } = this.props;

    return (
      <div className={styles.root} {...restProps}>
        {header}
        {options &&
          options.map((radio, index) => (
            <Radio
              key={index}
              name={name}
              id={`${name}${index}`}
              label={radio}
              value={radio}
              checked={this.state.value}
              onChange={this.handleChange}
              onClick={this.handleClick}
              onFocus={this.handleFocus}
            />
          ))}
      </div>
    );
  }
}

export default RadioList;
