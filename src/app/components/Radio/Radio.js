import styles from './Radio.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: this.props.focus,
      value: this.props.value
    };
  }

  // handleFocus = () => {
  //   this.setState({
  //     ...this.state,
  //     focus: true
  //   })
  // }

  handleBlur = () => {
    this.setState({
      ...this.state,
      focus: false
    });
  };

  render() {
    let {
      id,
      name,
      checked,
      label,
      onChange,
      onClick,
      onFocus,
      className,
      ...restProps
    } = this.props;
    return (
      <div {...restProps} className={classnames(styles.root, className)}>
        <input
          className={classnames({
            [styles.input]: true,
            [styles.focus]: this.state.focus
          })}
          id={id}
          name={name}
          type="radio"
          checked={checked === this.state.value}
          onChange={onChange}
        />
        <label
          className={classnames({
            [styles.label]: true
          })}
          onClick={() => onClick(this.state.value)}
          onFocus={onFocus}
          onBlur={this.handleBlur}
        >
          <Text className={styles.text} heading5>
            {label}
          </Text>
        </label>
      </div>
    );
  }
}

export default Radio;
