import styles from './FieldLabel.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

class FieldLabel extends Component {
  static displayName = 'FieldLabel';

  renderSecondary = () => {};

  render() {
    const { label, raw } = this.props;

    if (!label) {
      return null;
    }

    const { id, labelProps } = this.props;
    const allLabelProps = {
      htmlFor: id,
      ...combineClassNames(labelProps)
    };

    return (
      <label {...allLabelProps}>
        <Text raw={raw}>
          {label}
          {this.renderSecondary()}
          {this.renderTertiary()}
        </Text>
      </label>
    );
  }
}

export default FieldLabel;
