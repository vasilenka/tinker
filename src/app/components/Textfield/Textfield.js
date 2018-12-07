import styles from './Textfield.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';
import FieldInput from './../FieldInput/FieldInput';
import FieldHint from './../FieldHint/FieldHint';

class Textfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.removeError = this.removeError.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      error: this.props.errorMessage
    });
  };

  removeError = e => {
    this.setState({
      ...this.state,
      error: false
    });
  };

  render() {
    const {
      id,
      label,
      className,
      placeholder,
      value,
      hint,
      small,
      inline,
      errorMessage,
      ...restProps
    } = this.props;

    const labelProps = {
      labelMedium: !small,
      labelSmall: small,
      htmlFor: id
    };

    const TextfieldLabel = (
      <Text
        className={classnames({
          [styles.label]: true,
          [styles.stack]: !inline,
          [styles.inline]: inline
        })}
        {...labelProps}
        component="label"
      >
        {label}
      </Text>
    );

    return (
      <div
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
      >
        {TextfieldLabel}
        <FieldInput
          onClick={this.removeError}
          onFocus={this.removeError}
          placeholder={placeholder}
          small={small}
          error={this.state.error}
          id={id}
          name={id}
          value={value}
          className={classnames({
            [styles.spaceBottom]: (hint || this.state.error) && !inline
          })}
        />

        {hint && <FieldHint>{hint}</FieldHint>}

        {this.state.error && (
          <FieldHint error={errorMessage}>{errorMessage}</FieldHint>
        )}
      </div>
    );
  }
}

export default Textfield;
