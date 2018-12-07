import styles from './FieldHint.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

class FieldHint extends Component {
  render() {
    const { children, error, ...restProps } = this.props;

    return (
      <Text
        heading6
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [styles.error]: error
        })}
      >
        {children}
      </Text>
    );
  }
}

export default FieldHint;
