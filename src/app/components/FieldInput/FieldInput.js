import styles from './FieldInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class FieldInput extends Component {
  render() {
    const {
      className,
      id,
      onClick,
      small,
      placeholder,
      value,
      error,
      inline,
      ...restProps
    } = this.props;
    return (
      <input
        {...restProps}
        onClick={onClick}
        id={id}
        className={classnames({
          [styles.root]: true,
          [styles.normal]: !small,
          [styles.small]: small,
          [styles.stack]: !inline,
          [styles.inline]: inline,
          [styles.error]: error,
          [className]: className
        })}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

export default FieldInput;
