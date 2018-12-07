import styles from './CheckboxList.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Checkbox from './../Checkbox/Checkbox';
import Checkmark from './../Checkmark/Checkmark';
import Text from './../Text/Text';

class CheckboxList extends Component {
  labels = [
    'first label is going here',
    'A compound component is a type of component',
    'second one here',
    'third one here',
    'and fourth here'
  ];

  render() {
    let { className, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
      >
        {this.labels.map((label, index) => (
          <Checkbox key={index} className={styles.checkbox}>
            <Checkmark className={styles.box} />
            <div>
              <Text className={styles.label} heading5>
                {label}
              </Text>
              {index === 3 ? (
                <Text className={styles.secondaryLabel} medium component="p">
                  A compound component is a type of component that manages the
                  internal state of a feature while delegating control of the
                  rendering to the place of implementation opposed to the point
                  of declaration. They provide a way to shield feature specific
                  logic from the rest of the app providing a clean and
                  expressive API for consuming the component.
                </Text>
              ) : null}
            </div>
          </Checkbox>
        ))}
      </div>
    );
  }
}

export default CheckboxList;
